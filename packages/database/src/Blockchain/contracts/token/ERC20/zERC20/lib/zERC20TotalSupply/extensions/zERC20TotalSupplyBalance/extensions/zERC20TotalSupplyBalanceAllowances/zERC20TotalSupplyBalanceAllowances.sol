// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20TotalSupplyBalanceAllowances.sol";
import "./secure/PrivatezERC20TotalSupplyBalanceAllowances.sol";

contract zERC20TotalSupplyBalanceAllowances is
    IzERC20TotalSupplyBalanceAllowances,
    PrivatezERC20TotalSupplyBalanceAllowances
{
    function approve(address spender, uint256 amount)
        public
        virtual
        returns (bool)
    {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function allowance(address owner, address spender)
        external
        view
        returns (uint256)
    {
        return _allowance(owner, spender);
    }

    function transfer(address recipient, uint256 amount)
        public
        virtual
        override
        returns (bool)
    {
        return _transfer(_msgSender(), recipient, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        return _transfer(sender, recipient, amount);
    }
}

contract zERC20TotalSupplyBalanceAllowancesExtended is
    IzERC20TotalSupplyBalanceAllowancesExtended,
    PrivatezERC20TotalSupplyBalanceAllowances
{
    function approve(address spender, uint256 amount)
        public
        virtual
        returns (bool)
    {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function allowance(address owner, address spender)
        external
        view
        virtual
        returns (uint256)
    {
        return _allowance(owner, spender);
    }

    function increaseAllowance(address spender, uint256 addedValue)
        public
        virtual
        returns (bool)
    {
        _increaseAllowance(_msgSender(), spender, addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue)
        public
        virtual
        returns (bool)
    {
        return _decreaseAllowance(_msgSender(), spender, subtractedValue);
    }

    function transfer(address recipient, uint256 amount)
        public
        virtual
        override
        returns (bool)
    {
        return _transfer(_msgSender(), recipient, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        return _transfer(sender, recipient, amount);
    }
}
