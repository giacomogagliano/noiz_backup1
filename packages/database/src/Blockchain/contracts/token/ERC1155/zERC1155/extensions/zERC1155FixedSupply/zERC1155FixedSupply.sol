// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155FixedSupply.sol";
import "./secure/PrivatezERC1155FixedSupply.sol";

abstract contract zERC1155FixedSupply is
    IzERC1155FixedSupply,
    PrivatezERC1155FixedSupply
{
    function totalSupply(uint256 id) public view returns (uint256) {
        return _supply(id).supply;
    }

    function maxSupply(uint256 id) public view returns (uint256) {
        return _supply(id).maxSupply;
    }

    function exists(uint256 id) public view virtual returns (bool) {
        return _exists(id);
    }
}
