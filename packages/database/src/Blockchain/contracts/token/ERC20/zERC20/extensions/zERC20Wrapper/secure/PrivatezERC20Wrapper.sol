// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20Wrapper.sol";
import "../../../zERC20.sol";
import "../../../../utils/SafeERC20.sol";

contract PrivatezERC20Wrapper is Context, APrivatezERC20Wrapper, zERC20 {
    IERC20 public immutable UNDERLING;

    constructor(IERC20 underlyingToken) {
        UNDERLING = underlyingToken;
    }

    function _recover(address account)
        internal
        virtual
        override
        returns (uint256)
    {
        uint256 value = UNDERLING.balanceOf(address(this)) - _totalSupply();
        _mint(account, value);
        return value;
    }
}
