// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155Votes.sol";
import "../../../zERC1155.sol";
import "../../zERC1155Supply/zERC1155Supply.sol";
import "../../zERC1155Permit/zERC1155Permit.sol";

abstract contract PrivatezERC1155Votes is
    zERC1155,
    zERC1155Supply,
    zERC1155Permit,
    APrivatezERC1155Votes
{
    bytes32 private constant __DELEGATION_TYPEHASH =
        keccak256("Delegation(address delegatee,uint256 nonce,uint256 expiry)");

    function _DELEGATION_TYPEHASH() internal view virtual returns (bytes32) {
        return __DELEGATION_TYPEHASH;
    }

    mapping(address => mapping(uint256 => address)) private __delegatesId;
    mapping(address => mapping(uint256 => Checkpoint[]))
        private __checkpointsOfIds;
    mapping(uint256 => Checkpoint[]) private __idsTotalSupplyCheckpoints;

    function _delegatesId(address account)
        internal
        view
        returns (mapping(uint256 => address) storage)
    {
        return __delegatesId[account];
    }

    function _checkpointsOfIds(address account)
        internal
        view
        returns (mapping(uint256 => Checkpoint[]) storage)
    {
        return __checkpointsOfIds[account];
    }

    function _idsTotalSupplyCheckpoints(uint256 checkpointId)
        internal
        view
        returns (Checkpoint[] storage)
    {
        return __idsTotalSupplyCheckpoints[checkpointId];
    }

    function checkpointsLookup(Checkpoint[] storage ckpts, uint256 blockNumber)
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

    function _checkpointsLookup(Checkpoint[] storage ckpts, uint256 blockNumber)
        internal
        view
        returns (uint256)
    {
        return checkpointsLookup(ckpts, blockNumber);
    }

    function _maxSupply() internal view virtual returns (uint224) {
        return type(uint224).max;
    }

    function _delegates(address account, uint256 id)
        internal
        view
        virtual
        returns (address)
    {
        return __delegatesId[account][id];
    }

    function _delegate(
        uint256 id,
        address delegator,
        address delegatee
    ) internal virtual {
        address currentDelegate = _delegates(delegator, id);
        uint256 delegatorBalance = balanceOf(delegator, id);
        __delegatesId[delegator][id] = delegatee;

        emit DelegateChanged(delegator, id, currentDelegate, delegatee);
        _moveVotingPower(currentDelegate, delegatee, id, delegatorBalance);
    }

    function _mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual override {
        super._mint(to, id, amount, data);
        require(
            _totalSupply(id) <= _maxSupply(),
            "ERC1155Votes: total supply risks overflowing votes"
        );

        _writeCheckpoint(__idsTotalSupplyCheckpoints[id], zMaths._add, amount);
    }

    function _burn(
        address account,
        uint256 id,
        uint256 amount
    ) internal virtual override {
        super._burn(account, id, amount);

        _writeCheckpoint(
            __idsTotalSupplyCheckpoints[id],
            zMaths._subtract,
            amount
        );
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

    function _burnBatch(
        address from,
        uint256[] memory ids,
        uint256[] memory amounts
    ) internal virtual override {
        require(from != address(0), "ERC1155: burn from the zero address");
        require(
            ids.length == amounts.length,
            "ERC1155: ids and amounts length mismatch"
        );

        address operator = _msgSender();

        _beforeTokenTransfer(operator, from, address(0), ids, amounts, "");

        for (uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];

            uint256 fromBalance = _balances(id)[from];
            require(
                fromBalance >= amount,
                "ERC1155: burn amount exceeds balance"
            );
            unchecked {
                _balances(id)[from] = fromBalance - amount;
            }
        }

        emit ERC1155Lib.TransferBatch(operator, from, address(0), ids, amounts);
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
                    __checkpointsOfIds[src][id],
                    zMaths._subtract,
                    amount
                );
                emit DelegateVotesChanged(dst, id, oldWeight, newWeight);
            }
            if (dst != address(0)) {
                (uint256 oldWeight, uint256 newWeight) = _writeCheckpoint(
                    __checkpointsOfIds[dst][id],
                    zMaths._add,
                    amount
                );
                emit DelegateVotesChanged(dst, id, oldWeight, newWeight);
            }
        }
    }

    function _afterTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override
    {
        super._afterTokenTransfer(newTransfer);
        _moveVotingPower(
            _delegates(newTransfer.from, newTransfer.ids[0]),
            _delegates(newTransfer.to, newTransfer.ids[0]),
            newTransfer.ids[0],
            newTransfer.amounts[0]
        );
    }

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override(PrivatezERC1155, zERC1155Supply)
    {
        super._beforeTokenTransfer(newTransfer);
    }
}
