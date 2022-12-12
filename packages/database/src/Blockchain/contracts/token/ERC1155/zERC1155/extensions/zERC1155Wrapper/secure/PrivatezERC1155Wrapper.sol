// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155Wrapper.sol";
import "../../zERC1155Supply/zERC1155Supply.sol";

abstract contract PrivatezERC1155Wrapper is
    zERC1155Supply,
    APrivatezERC1155Wrapper
{
    IERC1155 public immutable UNDERLING;
    uint256 public immutable ID;

    constructor(IERC1155 underlyingToken, uint256 tokenId) {
        UNDERLING = underlyingToken;
        ID = tokenId;
    }

    function _depositFor(
        address account,
        uint256 amount,
        bytes memory data
    ) internal virtual returns (bool) {
        zERC1155.safeTransferFrom(
            _msgSender(),
            address(this),
            ID,
            amount,
            data
        );
        _mint(account, ID, amount, data);
        return true;
    }

    function _withdrawTo(address account, uint256 amount)
        internal
        virtual
        returns (
            // bytes memory data
            bool
        )
    {
        _burn(account, ID, amount);
        return true;
    }

    function _recover(address account, bytes memory data)
        internal
        virtual
        returns (uint256)
    {
        uint256 value = UNDERLING.balanceOf(account, ID) - totalSupply(ID);
        _mint(account, ID, value, data);
        return value;
    }
}
