// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

abstract contract AAfterTokenTransfer {
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual;
}
