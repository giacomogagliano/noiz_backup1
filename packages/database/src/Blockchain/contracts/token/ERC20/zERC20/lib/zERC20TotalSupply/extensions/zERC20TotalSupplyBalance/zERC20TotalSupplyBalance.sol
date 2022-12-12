// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20TotalSupplyBalance.sol";
import "./secure/PrivatezERC20TotalSupplyBalance.sol";

contract zERC20TotalSupplyBalance is
    Context,
    IzERC20TotalSupplyBalance,
    PrivatezERC20TotalSupplyBalance
{
    function balanceOf(address account)
        external
        view
        virtual
        returns (uint256)
    {
        return _balanceOf(account);
    }

    function transfer(address recipient, uint256 amount)
        external
        virtual
        override
        returns (bool)
    {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }
}
