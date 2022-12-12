// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../PrivateSymbolable.sol";
import "./ISymbolable.sol";

contract Symbolable is PrivateSymbolable, ISymbolable {
    function symbol() external view returns (string memory) {
        return _symbol();
    }
}
