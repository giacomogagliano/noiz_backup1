// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface TransferFrom {
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

interface TransferTokenIdFrom {
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;
}
