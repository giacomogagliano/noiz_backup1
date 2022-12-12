// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC20TokenShop.sol";

interface IzERC20TokenShop is IPrivatezERC20TokenShop {
    function getContractBalanceOfToken() external view returns (uint256);

    function getPrice() external view returns (uint256);

    function setCrowdSaleState() external returns (bool, bool);

    function setPrice(uint256 newPrice) external returns (bool, uint256);

    function buyTokens(uint256 amount) external returns (bool, uint256);

    function withdrawTokensOnSale(uint256 amount)
        external
        returns (bool, uint256);

    function withdrawRaisedCapital() external returns (bool);
}
