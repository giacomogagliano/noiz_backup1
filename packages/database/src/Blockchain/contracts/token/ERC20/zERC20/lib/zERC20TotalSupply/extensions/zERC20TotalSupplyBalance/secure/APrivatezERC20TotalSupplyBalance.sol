// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezERC20TotalSupplyBalance.sol";

abstract contract APrivatezERC20TotalSupplyBalance is
    IPrivatezERC20TotalSupplyBalance
{
    function _balanceOf(address account)
        internal
        view
        virtual
        returns (uint256);

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal virtual returns (bool);

    function _mint(address account, uint256 amount) internal virtual;

    function _burn(address account, uint256 amount) internal virtual;

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual;

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual;
}
