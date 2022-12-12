// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface IPrivatezERC1155FixedSupply {
    struct Supply {
        uint256 supply;
        uint256 maxSupply;
    }
}
