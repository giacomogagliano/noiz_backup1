// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface BalanceOf {
    function balanceOf(address account) external view returns (uint256);
}

interface BalanceOfOwner {
    function balanceOfOwner(address owner) external view returns (uint256);
}
