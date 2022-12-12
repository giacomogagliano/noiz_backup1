// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20Snapshot.sol";
import "../../../zERC20.sol";
import "../../../../../../utils/Arrays.sol";
import "../../../../../../utils/Counters.sol";

contract PrivatezERC20Snapshot is zERC20, APrivatezERC20Snapshot {
    using Arrays for uint256[];
    using Counters for Counters.Counter;

    mapping(address => Snapshots) private __accountBalanceSnapshots;
    Snapshots private __totalSupplySnapshots;
    Counters.Counter private __currentSnapshotId;

    function _accountBalanceSnapshots(address account)
        internal
        view
        virtual
        override
        returns (Snapshots storage)
    {
        return __accountBalanceSnapshots[account];
    }

    function _totalSupplySnapshots()
        internal
        view
        override
        returns (Snapshots storage)
    {
        return __totalSupplySnapshots;
    }

    function _snapshot() internal virtual override returns (uint256) {
        __currentSnapshotId.increment();

        uint256 currentId = _getCurrentSnapshotId();
        emit Snapshot(currentId);
        return currentId;
    }

    function _getCurrentSnapshotId()
        internal
        view
        virtual
        override
        returns (uint256)
    {
        return __currentSnapshotId.current();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);

        if (from == address(0)) {
            // mint
            _updateAccountSnapshot(to);
            _updateTotalSupplySnapshot();
        } else if (to == address(0)) {
            // burn
            _updateAccountSnapshot(from);
            _updateTotalSupplySnapshot();
        } else {
            // transfer
            _updateAccountSnapshot(from);
            _updateAccountSnapshot(to);
        }
    }

    function valueAt(uint256 snapshotId, Snapshots storage snapshots)
        private
        view
        returns (bool, uint256)
    {
        require(snapshotId > 0, "ERC20Snapshot: id is 0");
        require(
            snapshotId <= _getCurrentSnapshotId(),
            "ERC20Snapshot: nonexistent id"
        );

        // When a valid snapshot is queried, there are three possibilities:
        //  a) The queried value was not modified after the snapshot was taken. Therefore, a snapshot entry was never
        //  created for this id, and all stored snapshot ids are smaller than the requested one. The value that corresponds
        //  to this id is the current one.
        //  b) The queried value was modified after the snapshot was taken. Therefore, there will be an entry with the
        //  requested id, and its value is the one to return.
        //  c) More snapshots were created after the requested one, and the queried value was later modified. There will be
        //  no entry for the requested id: the value that corresponds to it is that of the smallest snapshot id that is
        //  larger than the requested one.
        //
        // In summary, we need to find an element in an array, returning the index of the smallest value that is larger if
        // it is not found, unless said value doesn't exist (e.g. when all values are smaller). Arrays.findUpperBound does
        // exactly this.

        uint256 index = snapshots.ids.findUpperBound(snapshotId);

        if (index == snapshots.ids.length) {
            return (false, 0);
        } else {
            return (true, snapshots.values[index]);
        }
    }

    function _valueAt(uint256 snapshotId, Snapshots storage snapshots)
        internal
        view
        override
        returns (bool, uint256)
    {
        return valueAt(snapshotId, snapshots);
    }

    function _updateAccountSnapshot(address account) private {
        _updateSnapshot(__accountBalanceSnapshots[account], balanceOf(account));
    }

    function _updateTotalSupplySnapshot() private {
        _updateSnapshot(__totalSupplySnapshots, totalSupply());
    }

    function _updateSnapshot(Snapshots storage snapshots, uint256 currentValue)
        private
    {
        uint256 currentId = _getCurrentSnapshotId();
        if (_lastSnapshotId(snapshots.ids) < currentId) {
            snapshots.ids.push(currentId);
            snapshots.values.push(currentValue);
        }
    }

    function _lastSnapshotId(uint256[] storage ids)
        private
        view
        returns (uint256)
    {
        if (ids.length == 0) {
            return 0;
        } else {
            return ids[ids.length - 1];
        }
    }
}
