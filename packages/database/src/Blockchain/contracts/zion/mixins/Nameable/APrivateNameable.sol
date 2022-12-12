// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivateNameable.sol";

abstract contract APrivateNameable is IPrivateNameable {
    function _name() internal view virtual returns (string memory);

    function _setName(string memory name_) internal virtual;
}
