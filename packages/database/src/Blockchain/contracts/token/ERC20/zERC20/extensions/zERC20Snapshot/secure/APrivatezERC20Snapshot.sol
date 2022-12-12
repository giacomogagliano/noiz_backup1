// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezERC20Snapshot.sol";

abstract contract APrivatezERC20Snapshot is IPrivatezERC20Snapshot {
    function _accountBalanceSnapshots(address account)
        internal
        view
        virtual
        returns (Snapshots storage);

    function _totalSupplySnapshots()
        internal
        view
        virtual
        returns (Snapshots storage);

    function _snapshot() internal virtual returns (uint256);

    function _getCurrentSnapshotId() internal view virtual returns (uint256);

    function _valueAt(uint256 snapshotId, Snapshots storage snapshots)
        internal
        view
        virtual
        returns (bool, uint256);
}
