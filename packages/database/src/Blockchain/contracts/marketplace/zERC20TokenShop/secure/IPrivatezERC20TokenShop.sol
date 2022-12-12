// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../access/Ownable.sol";
import "../../../utils/math/SafeMath.sol";
import "../../../token/ERC20/IERC20.sol";
import "../../../zion_contracts/Membership.sol";

interface IPrivatezERC20TokenShop {
    enum CrowdSaleState {
        OPEN,
        CLOSED
    }

    event ShopCreated(
        address shopAddress,
        address owner,
        Membership membership,
        IERC20 tokenUsedForPayement,
        IERC20 tokenContract,
        uint256 price
    );

    event Sold(address buyer, uint256 amount);

    event PriceChanged(address submitter, uint256 newPrice);

    event TokenOnSaleWithdrawal(address submitter, uint256 amount);

    event CapitalWithdrawal(address submitter, uint256 amount);
}
