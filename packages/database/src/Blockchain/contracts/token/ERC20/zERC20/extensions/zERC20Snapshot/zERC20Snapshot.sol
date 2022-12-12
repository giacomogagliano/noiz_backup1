// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20Snapshot.sol";
import "./secure/PrivatezERC20Snapshot.sol";

contract zERC20Snapshot is IzERC20Snapshot, PrivatezERC20Snapshot {
    function balanceOfAt(address account, uint256 snapshotId)
        public
        view
        virtual
        returns (uint256)
    {
        (bool snapshotted, uint256 value) = _valueAt(
            snapshotId,
            _accountBalanceSnapshots(account)
        );

        return snapshotted ? value : balanceOf(account);
    }

    function totalSupplyAt(uint256 snapshotId)
        public
        view
        virtual
        returns (uint256)
    {
        (bool snapshotted, uint256 value) = _valueAt(
            snapshotId,
            _totalSupplySnapshots()
        );

        return snapshotted ? value : totalSupply();
    }
}
