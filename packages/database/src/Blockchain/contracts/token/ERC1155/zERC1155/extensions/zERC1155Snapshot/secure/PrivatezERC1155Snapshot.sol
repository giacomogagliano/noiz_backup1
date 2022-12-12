// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155Snapshot.sol";
import "../../../zERC1155.sol";

abstract contract PrivatezERC1155Snapshot is
    zERC1155,
    APrivatezERC1155Snapshot
{
    using Arrays for uint256[];
    using Counters for Counters.Counter;

    mapping(address => mapping(uint256 => Snapshots))
        private __accountBalanceOfIdsSnapshots;
    mapping(uint256 => Snapshots) private __totalSupplyOfIdSnapshots;
    mapping(uint256 => uint256) private __totalSupply;
    Counters.Counter private __currentSnapshotId;

    function _accountBalanceOfIdsSnapshots(address account)
        internal
        view
        returns (mapping(uint256 => Snapshots) storage)
    {
        return __accountBalanceOfIdsSnapshots[account];
    }

    function _totalSupplyOfIdSnapshots(uint256 tokenId)
        internal
        view
        returns (Snapshots storage)
    {
        return __totalSupplyOfIdSnapshots[tokenId];
    }

    function _totalSupply(uint256 tokenId) internal view returns (uint256) {
        return __totalSupply[tokenId];
    }

    function _currentSnapshotId() internal view returns (uint256) {
        return __currentSnapshotId.current();
    }

    function _snapshot() internal virtual returns (uint256) {
        __currentSnapshotId.increment();

        uint256 currentId = _getCurrentSnapshotId();
        emit Snapshot(currentId);
        return currentId;
    }

    function _getCurrentSnapshotId() internal view virtual returns (uint256) {
        return __currentSnapshotId.current();
    }

    function _updateTotalSupplySnapshotBatch(uint256[] memory ids) private {
        for (uint256 i = 0; i < ids.length; i++) {
            uint256 tokenId = ids[i];
            _updateSnapshot(
                __totalSupplyOfIdSnapshots[tokenId],
                _totalSupply(ZionLib._asArraySingleton(ids))
            );
        }
    }

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override
    {
        super._beforeTokenTransfer(newTransfer);

        if (newTransfer.from == address(0)) {
            // mint
            if (newTransfer.ids.length == 1) {
                __totalSupply[newTransfer.ids[0]] += newTransfer.amounts[0];
                _updateAccountSnapshot(
                    newTransfer.to,
                    ZionLib._asArraySingleton(newTransfer.ids)
                );
                _updateTotalSupplySnapshot(
                    ZionLib._asArraySingleton(newTransfer.ids)
                );
            } else {
                for (
                    uint256 index = 0;
                    index < newTransfer.ids.length;
                    index++
                ) {
                    __totalSupply[newTransfer.ids[index]] += newTransfer
                        .amounts[index];
                }
                _updateAccountSnapshotBatch(newTransfer.to, newTransfer.ids);
                _updateTotalSupplySnapshotBatch(newTransfer.ids);
            }
        } else if (newTransfer.to == address(0)) {
            // burn
            if (newTransfer.ids.length == 1) {
                __totalSupply[newTransfer.ids[0]] -= newTransfer.amounts[0];
                _updateAccountSnapshot(
                    newTransfer.to,
                    ZionLib._asArraySingleton(newTransfer.ids)
                );
                _updateTotalSupplySnapshot(
                    ZionLib._asArraySingleton(newTransfer.ids)
                );
            } else {
                for (
                    uint256 index = 0;
                    index < newTransfer.ids.length;
                    index++
                ) {
                    __totalSupply[newTransfer.ids[index]] -= newTransfer
                        .amounts[index];
                }
                _updateAccountSnapshotBatch(newTransfer.from, newTransfer.ids);
                _updateTotalSupplySnapshotBatch(newTransfer.ids);
            }
        } else {
            // transfer
            if (newTransfer.ids.length == 1) {
                _updateAccountSnapshot(
                    newTransfer.from,
                    ZionLib._asArraySingleton(newTransfer.ids)
                );
                _updateAccountSnapshot(
                    newTransfer.to,
                    ZionLib._asArraySingleton(newTransfer.ids)
                );
            } else {
                _updateAccountSnapshotBatch(newTransfer.from, newTransfer.ids);
                _updateAccountSnapshotBatch(newTransfer.to, newTransfer.ids);
            }
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

        /** 
         *  When a valid snapshot is queried, there are three possibilities:
         *  a) The queried value was not modified after the snapshot was taken. Therefore, a snapshot entry was never
         *  created for this id, and all stored snapshot ids are smaller than the requested one. The value that corresponds
         *  to this id is the current one.
         *  b) The queried value was modified after the snapshot was taken. Therefore, there will be an entry with the
         *  requested id, and its value is the one to return.
         *  c) More snapshots were created after the requested one, and the queried value was later modified. There will be
         *  no entry for the requested id: the value that corresponds to it is that of the smallest snapshot id that is
         *  larger than the requested one.
        
         * In summary, we need to find an element in an array, returning the index of the smallest value that is larger if
         * it is not found, unless said value doesn't exist (e.g. when all values are smaller). Arrays.findUpperBound does
         * exactly this.
        */

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
        returns (bool, uint256)
    {
        return valueAt(snapshotId, snapshots);
    }

    function _updateAccountSnapshot(address account, uint256 id) private {
        _updateSnapshot(
            __accountBalanceOfIdsSnapshots[account][id],
            balanceOf(account, id)
        );
    }

    function _updateAccountSnapshotBatch(address account, uint256[] memory ids)
        private
    {
        for (uint256 i = 0; i < ids.length; i++) {
            uint256 tokenId = ids[i];
            _updateSnapshot(
                __accountBalanceOfIdsSnapshots[account][tokenId],
                balanceOf(account, tokenId)
            );
        }
    }

    function _updateTotalSupplySnapshot(uint256 id) private {
        _updateSnapshot(__totalSupplyOfIdSnapshots[id], _totalSupply(id));
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
