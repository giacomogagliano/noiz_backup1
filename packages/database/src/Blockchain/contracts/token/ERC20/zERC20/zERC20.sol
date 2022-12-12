// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20.sol";
import "./secure/PrivatezERC20.sol";

contract zERC20 is IzERC20, PrivatezERC20 {
    function balanceOf(address account)
        public
        view
        override(BalanceOf, zERC20TotalSupplyBalance)
        returns (uint256)
    {
        return _balanceOf(account);
    }

    function transfer(address recipient, uint256 amount)
        public
        virtual
        override(Transfer, zERC20TotalSupplyBalanceAllowancesExtended)
        returns (bool)
    {
        return _transfer(_msgSender(), recipient, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    )
        public
        virtual
        override(TransferFrom, zERC20TotalSupplyBalanceAllowancesExtended)
        returns (bool)
    {
        return _transfer(sender, recipient, amount);
    }

    function approve(address spender, uint256 amount)
        public
        override(Approve, zERC20TotalSupplyBalanceAllowancesExtended)
        returns (bool)
    {
        return _approve(_msgSender(), spender, amount);
    }

    function allowance(address owner, address spender)
        public
        view
        override(Allowance, zERC20TotalSupplyBalanceAllowancesExtended)
        returns (uint256)
    {
        return _allowance(owner, spender);
    }

    function totalSupply()
        public
        view
        override(TotalSupply, zERC20TotalSupply)
        returns (uint256)
    {
        return _totalSupply();
    }
}
