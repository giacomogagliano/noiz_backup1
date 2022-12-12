// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPausable.sol";
import "../PrivatePausable.sol";

contract Pausable is IPausable, PrivatePausable {
    function paused() public view virtual returns (bool) {
        return _paused();
    }
}
