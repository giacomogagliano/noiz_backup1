// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155Wrapper.sol";
import "./secure/PrivatezERC1155Wrapper.sol";

abstract contract zERC1155Wrapper is IzERC1155Wrapper, PrivatezERC1155Wrapper {
    function depositFor(
        address account,
        uint256 amount,
        bytes memory data
    ) public virtual returns (bool) {
        return _depositFor(account, amount, data);
    }

    function withdrawTo(address account, uint256 amount)
        public
        virtual
        returns (
            // bytes memory data
            bool
        )
    {
        return _withdrawTo(account, amount);
    }
}
