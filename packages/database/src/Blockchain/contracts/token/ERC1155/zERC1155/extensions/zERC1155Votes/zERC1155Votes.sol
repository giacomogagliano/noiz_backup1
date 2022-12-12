// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155Votes.sol";
import "./secure/PrivatezERC1155Votes.sol";

abstract contract zERC1155Votes is IzERC1155Votes, PrivatezERC1155Votes {
    function checkpoints(
        address account,
        uint256 id,
        uint32 pos
    ) public view virtual returns (Checkpoint memory) {
        return _checkpointsOfIds(account)[id][pos];
    }

    function delegates(address account, uint256 id)
        public
        view
        virtual
        returns (address)
    {
        return _delegatesId(account)[id];
    }

    function getVotes(address account, uint256 id)
        public
        view
        returns (uint256)
    {
        uint256 pos = _checkpointsOfIds(account)[id].length;
        return pos == 0 ? 0 : _checkpointsOfIds(account)[id][pos - 1].votes;
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
        return _checkpointsLookup(_idsTotalSupplyCheckpoints(id), blockNumber);
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
                        _DELEGATION_TYPEHASH(),
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
}
