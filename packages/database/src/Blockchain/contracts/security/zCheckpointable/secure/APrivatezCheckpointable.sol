// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezCheckpointable.sol";

abstract contract APrivatezCheckpointable is IPrivatezCheckpointable {
    function _checkpointsLookup(Checkpoint[] storage ckpts, uint256 blockNumber)
        internal
        view
        virtual
        returns (uint256);

    function _writeCheckpoint(
        Checkpoint[] storage ckpts,
        function(uint256, uint256) view returns (uint256) op,
        uint256 delta
    ) internal virtual returns (uint256 oldWeight, uint256 newWeight);

    function _checkpoints(address account)
        internal
        view
        virtual
        returns (Checkpoint[] storage);

    function _checkpoints(address account, uint256 pos)
        internal
        view
        virtual
        returns (Checkpoint storage);

    function _totalSupplyCheckpoints()
        internal
        view
        virtual
        returns (Checkpoint[] storage);

    function _maxSupply() internal view virtual returns (uint224);
}
