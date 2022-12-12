// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface IsApprovedForAll {
    function isApprovedForAll(address owner, address operator)
        external
        view
        returns (bool);
}
