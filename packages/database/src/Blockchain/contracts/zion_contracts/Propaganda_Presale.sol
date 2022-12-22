// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../oz/token/ERC20/extensions/ERC20Capped.sol";
import "../../oz/access/Ownable.sol";

contract Propaganda_Presale is ERC20Capped, Ownable {
    event Purchase(address indexed buyer, uint256 amount);

    /**
     * @notice This contract is to be used as payment method for the
     * NFT project by artist Gotek (twitter handle: GotekTNL). It is
     * used to consolidate a list of wallets which will be enable to
     * print 10 NFT ids each (max supply permitting).
     */
    constructor(
        address paymentCurrency_,
        address beneficiary_,
        uint256 price_
    ) ERC20("Gotek - Propaganda-presale", "GTKPPS") ERC20Capped(1000) {
        _paymentCurrency = paymentCurrency_;
        _beneficiary = beneficiary_;
        _price = price_;
    }

    /**
     * address of the Gotek - Propaganda token shop contract.
     */
    address private _tokenShop;

    /**
     * address of the token used as payment.
     */
    address private _paymentCurrency;

    address private _beneficiary;

    /**
     * @notice price in units (in shall be multiplied by the decimals
     * of the payment currency)
     */
    uint256 private _price;

    function price() public view returns (uint256) {
        return _price;
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }

    function beneficiary() public view returns (address) {
        return _beneficiary;
    }

    function buy1() public returns (bool) {
        return _buy(50);
    }

    function buy2() public returns (bool) {
        return _buy(100);
    }

    function _buy(uint256 amount) private returns (bool) {
        uint256 cost = price() * amount;
        address spender = _msgSender();
        uint256 spenderBalance = ERC20(_paymentCurrency).balanceOf(spender);
        uint256 contractAllowance = ERC20(_paymentCurrency).allowance(
            _msgSender(),
            address(this)
        );
        address recipient = beneficiary();
        require(
            cost <= contractAllowance,
            "the allowance permitted to this contract is not enough"
        );
        require(spenderBalance >= cost, "insufficient balance");
        ERC20(_paymentCurrency).transferFrom(spender, recipient, cost);
        _mint(spender, amount);
        emit Purchase(spender, amount);
        return true;
    }
}
