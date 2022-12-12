// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface Transfer {
    function transfer(address recipient, uint256 amount)
        external
        returns (bool);
}
