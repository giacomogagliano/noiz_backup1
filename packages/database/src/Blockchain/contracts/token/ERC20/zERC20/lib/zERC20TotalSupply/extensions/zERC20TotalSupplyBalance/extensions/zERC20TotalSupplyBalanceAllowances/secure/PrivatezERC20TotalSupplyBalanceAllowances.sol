// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20TotalSupplyBalanceAllowances.sol";
import "../../../zERC20TotalSupplyBalance.sol";

contract PrivatezERC20TotalSupplyBalanceAllowances is
    APrivatezERC20TotalSupplyBalanceAllowances,
    zERC20TotalSupplyBalance
{
    mapping(address => mapping(address => uint256)) private __allowances;

    function _allowances(address sender)
        internal
        view
        returns (mapping(address => uint256) storage)
    {
        return __allowances[sender];
    }

    function _approve(
        address owner,
        address spender,
        uint256 amount
    )
        internal
        virtual
        override(APrivatezERC20TotalSupplyBalanceAllowances)
        returns (bool)
    {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        __allowances[owner][spender] = amount;
        emit ERC20Lib.Approval(owner, spender, amount);
        return true;
    }

    function _allowance(address owner, address spender)
        internal
        view
        override(APrivatezERC20TotalSupplyBalanceAllowances)
        returns (uint256)
    {
        return __allowances[owner][spender];
    }

    function _increaseAllowance(
        address owner,
        address spender,
        uint256 addedValue
    )
        internal
        virtual
        override(APrivatezERC20TotalSupplyBalanceAllowances)
        returns (bool)
    {
        _approve(
            _msgSender(),
            spender,
            __allowances[owner][spender] + addedValue
        );
        return true;
    }

    function _decreaseAllowance(
        address owner,
        address spender,
        uint256 subtractedValue
    )
        internal
        virtual
        override(APrivatezERC20TotalSupplyBalanceAllowances)
        returns (bool)
    {
        uint256 currentAllowance = __allowances[owner][spender];
        require(
            currentAllowance >= subtractedValue,
            "ERC20: decreased allowance below zero"
        );
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }
        return true;
    }
}
