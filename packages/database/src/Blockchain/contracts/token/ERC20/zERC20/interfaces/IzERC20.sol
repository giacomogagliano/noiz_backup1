// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC20.sol";

interface IzERC20 is
    IPrivatezERC20,
    Allowance,
    Approve,
    BalanceOf,
    Transfer,
    TransferFrom,
    TotalSupply
{}
