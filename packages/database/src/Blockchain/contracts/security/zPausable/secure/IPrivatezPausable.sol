// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../utils/Context.sol";

interface IPrivatezPausable {
    event Paused(address account);

    event Unpaused(address account);
}
