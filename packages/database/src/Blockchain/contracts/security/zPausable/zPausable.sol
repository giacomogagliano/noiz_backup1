// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzPausable.sol";
import "./secure/PrivatezPausable.sol";

contract zPausable is IzPausable, PrivatezPausable {
    function paused() public view virtual returns (bool) {
        return _paused();
    }
}
