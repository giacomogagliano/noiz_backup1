// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezERC721.sol";

abstract contract APrivatezERC721 is IPrivatezERC721 {
    function _name() internal view virtual returns (string memory);

    function _symbol() internal view virtual returns (string memory);

    function _balances(address owner) internal view virtual returns (uint256);

    function _owners(uint256 tokenId) internal view virtual returns (address);

    function _tokenApprovals(uint256 tokenId)
        internal
        view
        virtual
        returns (address);

    function _operatorApprovals(address owner)
        internal
        view
        virtual
        returns (mapping(address => bool) storage);

    function _baseURI() internal view virtual returns (string memory);

    function _ownerOf(uint256 tokenId) internal view virtual returns (address);

    function _getApproved(uint256 tokenId)
        internal
        view
        virtual
        returns (address);

    function _isApprovedForAll(address owner, address operator)
        internal
        view
        virtual
        returns (bool);

    function _safeTransfer(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) internal virtual;

    function _exists(uint256 tokenId) internal view virtual returns (bool);

    function _isApprovedOrOwner(address spender, uint256 tokenId)
        internal
        view
        virtual
        returns (bool);

    function _safeMint(address to, uint256 tokenId) internal virtual;

    function _safeMint(
        address to,
        uint256 tokenId,
        bytes memory _data
    ) internal virtual;

    function _mint(address to, uint256 tokenId) internal virtual;

    function _burn(uint256 tokenId) internal virtual;

    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual;

    function _approve(address to, uint256 tokenId) internal virtual;

    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal virtual;

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual {}
}
