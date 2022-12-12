// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../PrivateNameable.sol";
import "./INameable.sol";

contract Nameable is PrivateNameable, INameable {
    function name() public view returns (string memory) {
        return _name();
    }
}
