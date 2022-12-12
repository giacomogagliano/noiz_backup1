// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20.sol";
import "../lib/zERC20TotalSupply/extensions/zERC20TotalSupplyBalance/extensions/zERC20TotalSupplyBalanceAllowances/zERC20TotalSupplyBalanceAllowances.sol";

contract PrivatezERC20 is
    APrivatezERC20,
    zERC20TotalSupplyBalanceAllowancesExtended
{}
