// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../utils/math/SafeCast.sol";
import "../../../utils/math/Math.sol";

interface IPrivatezCheckpointable {
    struct Checkpoint {
        uint32 fromBlock;
        uint224 votes;
    }
}
