// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155TokenShop.sol";

abstract contract PrivatezERC1155TokenShop is
    Context,
    APrivatezERC1155TokenShop
{
    ////////////////////
    // Constructor datas
    ////////////////////
    using SafeMath for uint256;
    Membership private __membership;
    ERC1155 private __tokenContract;
    IERC20 private __tokenUsedForPayement;
    uint256 private __price;
    ////////////////////
    // Crowdsale Reports
    ////////////////////
    uint256 private __raisedCapital;
    Status private __shopStatus;

    mapping(address => mapping(uint256 => uint256)) public tokensBoughtByBuyer; ///@dev mapping addresses to balances of purchased tokens.

    /// @dev Constructor of the contracts takes in address of the owner, so that deployer can transfer ownership on deploy.
    /// @param owner will have rights over all of the contract functions.
    /// @param membership is the contract address of the membership token.
    /// @param tokenUsedForPayement is the contract address of the token used for payments.
    /// @param tokenContract is the address of the contract for the token which is going to be sold by this shop.
    /// @param price is the price of each unity of tokens.
    constructor(
        address owner,
        Membership membership,
        ERC1155 tokenContract,
        IERC20 tokenUsedForPayement,
        uint256 price
    ) {
        __membership = membership;
        __tokenUsedForPayement = tokenUsedForPayement;
        __tokenContract = tokenContract;
        __price = price;
        emit ShopCreated(
            address(this),
            owner,
            __membership,
            __tokenContract,
            __tokenUsedForPayement,
            __price
        );
    }

    /// @dev modifier which checks if msg sender has a membership token.
    modifier onlyMembers() {
        require(
            __membership.balanceOf(msg.sender, 0) != 0,
            "user is not yet Member of this DAO"
        );
        _;
    }

    function _tokenContract() internal view returns (ERC1155) {
        return __tokenContract;
    }

    function _tokenUsedForPayment() internal view returns (IERC20) {
        return __tokenUsedForPayement;
    }

    function _price() internal view returns (uint256) {
        return __price;
    }

    function _shopStatus() internal view returns (Status) {
        return __shopStatus;
    }

    function _getRaisedCapital() internal view returns (uint256 raisedCapital) {
        raisedCapital = __raisedCapital;
    }

    function _setPrice(uint256 newPrice) internal returns (bool, uint256) {
        __price = newPrice;
        emit PriceChanged(msg.sender, newPrice);
        return (true, newPrice);
    }

    function _setShopStatus(uint256 status) internal returns (Status) {
        __shopStatus = Status(status);
        return __shopStatus;
    }

    function _buyTokens(
        address buyer,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual returns (uint256) {
        _beforeTokenPurchase(buyer, id, amount, data);

        // (bool executed, Status status) = _setShopStatus(id);

        require(
            _shopStatus() == Status.ACTIVE,
            "Token sale is Currently closed"
        );
        uint256 cost = amount * _price();
        tokensBoughtByBuyer[msg.sender][id] += amount;
        __tokenUsedForPayement.transferFrom(msg.sender, address(this), cost);
        __raisedCapital += cost;
        _tokenContract().safeTransferFrom(
            address(this),
            _msgSender(),
            id,
            amount,
            data
        );
        emit Sold(msg.sender, id, amount);
        return (amount);
    }

    function _beforeTokenPurchase(
        address buyer,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual {}

    function _beforeWithdrawRaisedCapital(address claimer, uint256 amount)
        internal
        virtual
    {}
}
