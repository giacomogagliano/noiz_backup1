// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20TokenShop.sol";

contract PrivatezERC20TokenShop is APrivatezERC20TokenShop {
    ////////////////////
    // Constructor datas
    ////////////////////
    using SafeMath for uint256;
    Membership public membership;
    IERC20 public tokenContract;
    IERC20 public tokenUsedForPayement;
    uint256 public price;
    ////////////////////
    // Crowdsale Reports
    ////////////////////
    uint256 public raisedCapital;
    bool public crowdSaleOpen;

    mapping(address => uint256) public tokensBoughtByBuyer; ///@dev mapping addresses to balances of purchased tokens.

    /// @dev Constructor of the contracts takes in address of the owner, so that deployer can transfer ownership on deploy.
    /// @param owner will have rights over all of the contract functions.
    /// @param membership_ is the contract address of the membership token.
    /// @param tokenUsedForPayement_ is the contract address of the token used for payments.
    /// @param tokenContract_ is the address of the contract for the token which is going to be sold by this shop.
    /// @param price_ is the price of each unity of tokens.
    constructor(
        address owner,
        Membership membership_,
        IERC20 tokenUsedForPayement_,
        IERC20 tokenContract_,
        uint256 price_
    ) {
        membership = membership_;
        tokenUsedForPayement = tokenUsedForPayement_;
        tokenContract = tokenContract_;
        price = price_;
        transferOwnership(owner);
        emit ShopCreated(
            address(this),
            owner,
            membership,
            tokenUsedForPayement,
            tokenContract,
            price
        );
    }

    /// @dev modifier which checks if msg sender has a membership token.
    modifier onlyMembers() {
        require(
            membership.balanceOf(msg.sender, 0) != 0,
            "user is not yet Member of this DAO"
        );
        _;
    }

    function _beforeWithdrawRaisedCapital() internal virtual {}
}
