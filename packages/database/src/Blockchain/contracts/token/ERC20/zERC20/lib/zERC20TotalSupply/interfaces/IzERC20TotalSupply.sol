// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC20TotalSupply.sol";

interface IzERC20TotalSupply is IPrivatezERC20TotalSupply {
    function totalSupply() external view returns (uint256);
}
