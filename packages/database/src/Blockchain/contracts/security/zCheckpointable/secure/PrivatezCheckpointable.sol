// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezCheckpointable.sol";

contract PrivatezCheckpointable is APrivatezCheckpointable {
    mapping(address => Checkpoint[]) private checkpoints;
    Checkpoint[] private totalSupplyCheckpoints;

    function _checkpointsLookup(Checkpoint[] storage ckpts, uint256 blockNumber)
        internal
        view
        override
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

    function _writeCheckpoint(
        Checkpoint[] storage ckpts,
        function(uint256, uint256) view returns (uint256) op,
        uint256 delta
    ) internal override returns (uint256 oldWeight, uint256 newWeight) {
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

    function _checkpoints(address account)
        internal
        view
        override
        returns (Checkpoint[] storage)
    {
        return checkpoints[account];
    }

    function _checkpoints(address account, uint256 pos)
        internal
        view
        override
        returns (Checkpoint storage)
    {
        return checkpoints[account][pos];
    }

    function _totalSupplyCheckpoints()
        internal
        view
        override
        returns (Checkpoint[] storage)
    {
        return totalSupplyCheckpoints;
    }

    function _maxSupply() internal view virtual override returns (uint224) {
        return type(uint224).max;
    }
}
