// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC1155TokenShop.sol";

interface IzERC1155TokenShop is IPrivatezERC1155TokenShop {
    function getContractBalanceOfToken(uint256 id)
        external
        view
        returns (uint256);

    function getPrice() external view returns (uint256);

    function getRaisedCapital() external view returns (uint256);

    function getShopStatus() external view returns (Status);

    function withdrawTokensOnSale(
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external returns (bool, uint256);

    function withdrawRaisedCapital(uint256 amount) external returns (bool);
}
