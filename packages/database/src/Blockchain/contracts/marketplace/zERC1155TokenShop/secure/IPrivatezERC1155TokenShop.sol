// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../token/ERC1155/extensions/ERC1155Receiver.sol";
import "../../../token/ERC20/IERC20.sol";
import "../../../token/ERC1155/IERC1155.sol";
import "../../../utils/math/SafeMath.sol";
import "../../../utils/Context.sol";

import "../../../zion_contracts/Membership.sol";

interface IPrivatezERC1155TokenShop {
    enum Status {
        CLOSED,
        ACTIVE,
        SUSPENDED
    }
    event ShopCreated(
        address shopAddress,
        address owner,
        Membership membership,
        ERC1155 tokenContract,
        IERC20 tokenUsedForPayement,
        uint256 price
    );
    event Sold(address buyer, uint256 id, uint256 amount);
    event PriceChanged(address submitter, uint256 newPrice);
    event TokenOnSaleWithdrawal(address submitter, uint256 amount);
    event CapitalWithdrawal(address submitter, uint256 amount);
}
