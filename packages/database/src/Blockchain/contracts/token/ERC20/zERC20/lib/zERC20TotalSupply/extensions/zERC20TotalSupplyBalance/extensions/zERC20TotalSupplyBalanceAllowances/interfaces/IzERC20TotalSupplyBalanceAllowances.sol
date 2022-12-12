// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC20TotalSupplyBalanceAllowances.sol";

interface IzERC20TotalSupplyBalanceAllowances is
    IPrivatezERC20TotalSupplyBalanceAllowances
{
    function approve(address spender, uint256 amount) external returns (bool);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

interface IzERC20TotalSupplyBalanceAllowancesExtended is
    IzERC20TotalSupplyBalanceAllowances
{
    function increaseAllowance(address spender, uint256 addedValue)
        external
        returns (bool);

    function decreaseAllowance(address spender, uint256 subtractedValue)
        external
        returns (bool);
}
