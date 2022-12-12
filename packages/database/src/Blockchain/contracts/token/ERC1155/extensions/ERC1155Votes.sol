// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./draft-ERC1155Permit.sol";
import "../../../utils/math/Math.sol";
import "../../../utils/math/SafeCast.sol";
import "../../../utils/cryptography/ECDSA.sol";
import "./ERC1155Supply.sol";

abstract contract ERC1155Votes is ERC1155Permit, ERC1155Supply {
    struct Checkpoint {
        uint256 fromBlock;
        uint224 votes;
    }

    event DelegateChanged(
        address indexed delegator,
        uint256 id,
        address indexed fromDelegatee,
        address indexed toDelegatee
    );

    event DelegateVotesChanged(
        address indexed delegate,
        uint256 id,
        uint256 previousBalance,
        uint256 newBalance
    );

    bytes32 private constant _DELEGATION_TYPEHASH =
        keccak256("Delegation(address delegatee,uint256 nonce,uint256 expiry)");

    mapping(address => mapping(uint256 => address)) private _delegatesId;
    mapping(address => mapping(uint256 => Checkpoint[]))
        private _checkpointsOfIds;
    mapping(uint256 => Checkpoint[]) private _idsTotalSupplyCheckpoints;

    function checkpoints(
        address account,
        uint256 id,
        uint32 pos
    ) public view virtual returns (Checkpoint memory) {
        return _checkpointsOfIds[account][id][pos];
    }

    function delegates(address account, uint256 id)
        public
        view
        virtual
        returns (address)
    {
        return _delegatesId[account][id];
    }

    function getVotes(address account, uint256 id)
        public
        view
        returns (uint256)
    {
        uint256 pos = _checkpointsOfIds[account][id].length;
        return pos == 0 ? 0 : _checkpointsOfIds[account][id][pos - 1].votes;
    }

    function getPastVotes(
        address account,
        uint256 id,
        uint256 blockNumber
    ) public view returns (uint256) {
        require(
            blockNumber < block.number,
            "ERC1155Votes: block not yet mined"
        );
        return _checkpointsLookup(_checkpointsOfIds[account][id], blockNumber);
    }

    function getPastTotalSupply(uint256 id, uint256 blockNumber)
        public
        view
        returns (uint256)
    {
        require(
            blockNumber < block.number,
            "ERC1155Votes: block not yet mined"
        );
        return _checkpointsLookup(_idsTotalSupplyCheckpoints[id], blockNumber);
    }

    function _checkpointsLookup(Checkpoint[] storage ckpts, uint256 blockNumber)
        private
        view
        returns (uint256)
    {
        uint256 high = ckpts.length;
        uint256 low = 0;
        while (low < high) {
            uint256 mid = Math.average(low, high);
            if (ckpts[mid].fromBlock > blockNumber) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        return high == 0 ? 0 : ckpts[high - 1].votes;
    }

    function delegate(uint256 id, address delegatee) public virtual {
        _delegate(id, _msgSender(), delegatee);
    }

    function delegateBySig(
        uint256 id,
        address delegatee,
        uint256 nonce,
        uint256 expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public virtual {
        require(block.timestamp <= expiry, "ERC1155Votes: signature expired");
        address signer = ECDSA.recover(
            _hashTypedDataV4(
                keccak256(
                    abi.encode(
                        _DELEGATION_TYPEHASH,
                        id,
                        delegatee,
                        nonce,
                        expiry
                    )
                )
            ),
            v,
            r,
            s
        );
        require(nonce == _useNonce(signer), "ERC1155Votes: invalid nonce");
        _delegate(id, signer, delegatee);
    }

    function _maxSupply() internal view virtual returns (uint224) {
        return type(uint224).max;
    }

    function _mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual override(ERC1155Struct) {
        super._mint(to, id, amount, data);
        require(
            totalSupply(id) <= _maxSupply(),
            "ERC1155Votes: total supply risks overflowing votes"
        );

        _writeCheckpoint(_idsTotalSupplyCheckpoints[id], _add, amount);
    }

    function _burn(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual override {
        super._burn(account, id, amount, data);

        _writeCheckpoint(_idsTotalSupplyCheckpoints[id], _subtract, amount);
    }

    function _afterTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override
    {
        super._afterTokenTransfer(newTransfer);
        _moveVotingPower(
            delegates(newTransfer.from, newTransfer.ids[0]),
            delegates(newTransfer.to, newTransfer.ids[0]),
            newTransfer.ids[0],
            newTransfer.amounts[0]
        );
    }

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override(ERC1155Supply, ERC1155Struct)
    {
        super._beforeTokenTransfer(newTransfer);
    }

    function _delegate(
        uint256 id,
        address delegator,
        address delegatee
    ) internal virtual {
        address currentDelegate = delegates(delegator, id);
        uint256 delegatorBalance = balanceOf(delegator, id);
        _delegatesId[delegator][id] = delegatee;

        emit DelegateChanged(delegator, id, currentDelegate, delegatee);
        _moveVotingPower(currentDelegate, delegatee, id, delegatorBalance);
    }

    function _moveVotingPower(
        address src,
        address dst,
        uint256 id,
        uint256 amount
    ) private {
        if (src != dst && amount > 0) {
            if (src != address(0)) {
                (uint256 oldWeight, uint256 newWeight) = _writeCheckpoint(
                    _checkpointsOfIds[src][id],
                    _subtract,
                    amount
                );
                emit DelegateVotesChanged(dst, id, oldWeight, newWeight);
            }
            if (dst != address(0)) {
                (uint256 oldWeight, uint256 newWeight) = _writeCheckpoint(
                    _checkpointsOfIds[dst][id],
                    _add,
                    amount
                );
                emit DelegateVotesChanged(dst, id, oldWeight, newWeight);
            }
        }
    }

    function _writeCheckpoint(
        Checkpoint[] storage ckpts,
        function(uint256, uint256) view returns (uint256) op,
        uint256 delta
    ) private returns (uint256 oldWeight, uint256 newWeight) {
        uint256 pos = ckpts.length;
        oldWeight = pos == 0 ? 0 : ckpts[pos - 1].votes;
        newWeight = op(oldWeight, delta);

        if (pos > 0 && ckpts[pos - 1].fromBlock == block.number) {
            ckpts[pos - 1].votes = SafeCast.toUint224(newWeight);
        } else {
            ckpts.push(
                Checkpoint({
                    fromBlock: SafeCast.toUint32(block.number),
                    votes: SafeCast.toUint224(newWeight)
                })
            );
        }
    }

    function _add(uint256 a, uint256 b) private pure returns (uint256) {
        return a + b;
    }

    function _subtract(uint256 a, uint256 b) private pure returns (uint256) {
        return a - b;
    }
}
