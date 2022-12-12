// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20TotalSupply.sol";
import "./secure/PrivatezERC20TotalSupply.sol";

contract zERC20TotalSupply is IzERC20TotalSupply, PrivatezERC20TotalSupply {
    function totalSupply() external view virtual returns (uint256) {
        return _totalSupply();
    }
}
