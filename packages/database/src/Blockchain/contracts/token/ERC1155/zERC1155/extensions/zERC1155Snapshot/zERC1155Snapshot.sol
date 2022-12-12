// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155Snapshot.sol";
import "./secure/PrivatezERC1155Snapshot.sol";

abstract contract zERC1155Snapshot is
    IzERC1155Snapshot,
    PrivatezERC1155Snapshot
{
    function balanceOfAt(
        address account,
        uint256 id,
        uint256 snapshotId
    ) public view virtual returns (uint256) {
        (bool snapshotted, uint256 value) = _valueAt(
            snapshotId,
            _accountBalanceOfIdsSnapshots(account)[id]
        );

        return snapshotted ? value : balanceOf(account, id);
    }

    function totalSupply(uint256 id) public view returns (uint256) {
        return _totalSupply(id);
    }

    function totalSupplyAt(uint256 id, uint256 snapshotId)
        public
        view
        virtual
        returns (uint256)
    {
        (bool snapshotted, uint256 value) = _valueAt(
            snapshotId,
            _totalSupplyOfIdSnapshots(id)
        );

        return snapshotted ? value : _totalSupply(id);
    }
}
