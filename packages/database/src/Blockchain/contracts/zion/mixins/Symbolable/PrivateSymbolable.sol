// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivateSymbolable.sol";

contract PrivateSymbolable is APrivateSymbolable {
    string private symbol;

    function _symbol() internal view override returns (string memory) {
        return symbol;
    }

    function _setSymbol(string memory symbol_) internal override {
        symbol = symbol_;
    }
}
