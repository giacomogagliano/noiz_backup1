// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezPausable.sol";

abstract contract APrivatezPausable is IPrivatezPausable {
    function _paused() internal view virtual returns (bool);
}
