// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20Wrapper.sol";
import "./secure/PrivatezERC20Wrapper.sol";

abstract contract zERC20Wrapper is IzERC20Wrapper, PrivatezERC20Wrapper {
    function depositFor(address account, uint256 amount)
        public
        virtual
        returns (bool)
    {
        SafeERC20.safeTransferFrom(
            UNDERLING,
            _msgSender(),
            address(this),
            amount
        );
        _mint(account, amount);
        return true;
    }

    function withdrawTo(address account, uint256 amount)
        public
        virtual
        returns (bool)
    {
        _burn(_msgSender(), amount);
        SafeERC20.safeTransfer(UNDERLING, account, amount);
        return true;
    }
}
