// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezERC20TotalSupplyBalanceAllowances.sol";

abstract contract APrivatezERC20TotalSupplyBalanceAllowances is
    IPrivatezERC20TotalSupplyBalanceAllowances
{
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual returns (bool);

    function _allowance(address owner, address spender)
        internal
        view
        virtual
        returns (uint256);

    function _increaseAllowance(
        address owner,
        address spender,
        uint256 addedValue
    ) internal virtual returns (bool);

    function _decreaseAllowance(
        address owner,
        address spender,
        uint256 subtractedValue
    ) internal virtual returns (bool);
}
