// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivateNameable.sol";

contract PrivateNameable is APrivateNameable {
    string private name;

    function _name() internal view override returns (string memory) {
        return name;
    }

    function _setName(string memory name_) internal override {
        name = name_;
    }
}
