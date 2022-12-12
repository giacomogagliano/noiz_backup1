// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./ERC1155Supply.sol";

abstract contract ERC1155Wrapper is ERC1155Supply {
    IERC1155 public immutable underlying;
    uint256 public immutable id;

    constructor(IERC1155 underlyingToken, uint256 tokenId) {
        underlying = underlyingToken;
        id = tokenId;
    }

    function depositFor(
        address account,
        uint256 amount,
        bytes memory data
    ) public virtual returns (bool) {
        ERC1155Struct.safeTransferFrom(
            _msgSender(),
            address(this),
            id,
            amount,
            data
        );
        _mint(account, id, amount, data);
        return true;
    }

    function withdrawTo(
        address account,
        uint256 amount,
        bytes memory data
    ) public virtual returns (bool) {
        _burn(account, id, amount, data);
        return true;
    }

    function _recover(address account, bytes memory data)
        internal
        virtual
        returns (uint256)
    {
        uint256 value = underlying.balanceOf(account, id) - totalSupply(id);
        _mint(account, id, value, data);
        return value;
    }
}
