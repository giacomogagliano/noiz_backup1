// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface Allowance {
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);
}
