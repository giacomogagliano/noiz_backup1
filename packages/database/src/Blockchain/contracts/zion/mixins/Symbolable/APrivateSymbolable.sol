// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

abstract contract APrivateSymbolable {
    string private symbol;

    function _symbol() internal view virtual returns (string memory);

    function _setSymbol(string memory symbol_) internal virtual;
}
