// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155TokenShop.sol";
import "./secure/PrivatezERC1155TokenShop.sol";

contract zERC1155TokenShop is
    ERC1155Receiver,
    IzERC1155TokenShop,
    PrivatezERC1155TokenShop
{
    constructor(
        address owner,
        Membership membership,
        ERC1155 tokenContract,
        IERC20 tokenUsedForPayement,
        uint256 price
    )
        PrivatezERC1155TokenShop(
            owner,
            membership,
            tokenContract,
            tokenUsedForPayement,
            price
        )
    {}

    /// @dev Function to check the balance of tokens to sell contained in this contract.
    function getContractBalanceOfToken(uint256 id)
        public
        view
        override
        returns (uint256)
    {
        uint256 balance = _tokenContract().balanceOf(address(this), id);
        return balance;
    }

    /// @dev function to get the current price at which the tokens is going to be sold.
    function getPrice() public view override returns (uint256) {
        return _price();
    }

    function getRaisedCapital()
        public
        view
        override
        returns (uint256 raisedCapital)
    {
        return _getRaisedCapital();
    }

    function getShopStatus() public view override returns (Status shopStatus) {
        return _shopStatus();
    }

    function withdrawTokensOnSale(
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override returns (bool, uint256) {
        _tokenContract().safeTransferFrom(
            address(this),
            _msgSender(),
            id,
            amount,
            data
        );
        emit TokenOnSaleWithdrawal(msg.sender, amount);
        return (true, amount);
    }

    function withdrawRaisedCapital(uint256 amount)
        public
        override
        returns (bool)
    {
        address claimer = _msgSender();

        _beforeWithdrawRaisedCapital(claimer, amount);

        _tokenUsedForPayment().transfer(claimer, amount);
        emit CapitalWithdrawal(claimer, amount);
        return true;
    }

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
}
