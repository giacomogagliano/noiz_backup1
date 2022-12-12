// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20TokenShop.sol";
import "./secure/PrivatezERC20TokenShop.sol";

contract zERC20TokenShop is IzERC20TokenShop, PrivatezERC20TokenShop {
    /// @dev Function to check the balance of tokens to sell contained in this contract.
    function getContractBalanceOfToken()
        public
        view
        override
        returns (uint256)
    {
        uint256 balance = tokenContract.balanceOf(address(this));
        return balance;
    }

    /// @dev function to get the current price at which the tokens is going to be sold.
    function getPrice() public view returns (uint256) {
        return price;
    }

    /// @dev function which sets the state of the crowd sale, it is called .
    function setCrowdSaleState()
        public
        override
        onlyOwner
        returns (bool, bool)
    {
        uint256 balance = getContractBalanceOfToken();
        if (balance == 0) {
            crowdSaleOpen = false;
        } else {
            crowdSaleOpen = true;
        }
        return (true, crowdSaleOpen);
    }

    function setPrice(uint256 newPrice)
        public
        override
        onlyOwner
        returns (bool, uint256)
    {
        price = newPrice;
        emit PriceChanged(msg.sender, newPrice);
        return (true, newPrice);
    }

    function buyTokens(uint256 amount)
        public
        override
        onlyMembers
        returns (bool, uint256)
    {
        require(crowdSaleOpen, "Token sale is Currently closed");
        uint256 cost = amount * price;
        tokensBoughtByBuyer[msg.sender] += amount;
        raisedCapital += cost;
        tokenUsedForPayement.transferFrom(msg.sender, address(this), cost);
        tokenContract.transfer(msg.sender, amount);
        emit Sold(msg.sender, amount);
        return (true, amount);
    }

    function withdrawTokensOnSale(uint256 amount)
        external
        override
        onlyOwner
        returns (bool, uint256)
    {
        tokenContract.transfer(msg.sender, amount);
        emit TokenOnSaleWithdrawal(msg.sender, amount);
        return (true, amount);
    }

    function withdrawRaisedCapital() public override onlyOwner returns (bool) {
        _beforeWithdrawRaisedCapital();

        tokenUsedForPayement.transfer(msg.sender, raisedCapital);
        emit CapitalWithdrawal(msg.sender, raisedCapital);
        return true;
    }

    /// CONTRACT TERMINATION BY RENOUNCE OWNERSHIP
    function renounceOwnership() public override onlyOwner {
        renounceOwnership();
    }
}
