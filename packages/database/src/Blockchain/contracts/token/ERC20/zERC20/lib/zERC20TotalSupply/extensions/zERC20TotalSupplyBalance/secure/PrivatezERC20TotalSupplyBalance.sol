// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20TotalSupplyBalance.sol";
import "../../../zERC20TotalSupply.sol";

contract PrivatezERC20TotalSupplyBalance is
    APrivatezERC20TotalSupplyBalance,
    zERC20TotalSupply
{
    mapping(address => uint256) private __balances;

    function _balanceOf(address account)
        internal
        view
        override(APrivatezERC20TotalSupplyBalance)
        returns (uint256)
    {
        return __balances[account];
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal override(APrivatezERC20TotalSupplyBalance) returns (bool) {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(sender, recipient, amount);

        uint256 senderBalance = __balances[sender];
        require(
            senderBalance >= amount,
            "ERC20: transfer amount exceeds balance"
        );
        unchecked {
            __balances[sender] = senderBalance - amount;
        }
        __balances[recipient] += amount;

        emit ERC20Lib.Transfer(sender, recipient, amount);

        _afterTokenTransfer(sender, recipient, amount);
        return true;
    }

    function _mint(address account, uint256 amount)
        internal
        override(APrivatezERC20TotalSupplyBalance)
    {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _addSupply(amount);
        __balances[account] += amount;
        emit ERC20Lib.Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(APrivatezERC20TotalSupplyBalance)
    {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = __balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            __balances[account] = accountBalance - amount;
        }
        _subSupply(amount);

        emit ERC20Lib.Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override(APrivatezERC20TotalSupplyBalance) {}

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override(APrivatezERC20TotalSupplyBalance) {}
}
