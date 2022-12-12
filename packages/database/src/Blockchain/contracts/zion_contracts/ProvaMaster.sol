// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../token/ERC1155/extensions/ERC1155Master.sol";

contract ProvaMaster is ERC1155Master {
    uint256 sharesAmount = 1000;

    constructor() ERC1155Master(sharesAmount) ERC1155Struct("provauri") {}
}
