// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface Approve {
    function approve(address spender, uint256 amount) external returns (bool);
}

interface ApproveToken {
    function approve(address to, uint256 tokenId) external;
}
