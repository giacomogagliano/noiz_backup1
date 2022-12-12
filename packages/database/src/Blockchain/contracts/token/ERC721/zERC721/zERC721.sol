// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC721.sol";
import "./secure/PrivatezERC721.sol";
import "../../../utils/introspection/ERC165.sol";
import "../extensions/IERC721Metadata.sol";

abstract contract zERC721 is
    ERC165,
    IzERC721,
    IERC721,
    IERC721Metadata,
    PrivatezERC721
{
    using Strings for uint256;

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC165, IzERC721)
        returns (bool)
    {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function balanceOf(address owner)
        public
        view
        virtual
        override
        returns (uint256)
    {
        require(
            owner != address(0),
            "ERC721: balance query for the zero address"
        );
        return _balances(owner);
    }

    function ownerOf(uint256 tokenId)
        public
        view
        virtual
        override(IERC721, OwnerOf)
        returns (address)
    {
        address owner = _owners(tokenId);
        require(
            owner != address(0),
            "ERC721: owner query for nonexistent token"
        );
        return owner;
    }

    function name()
        public
        view
        virtual
        override(Name, IERC721Metadata)
        returns (string memory)
    {
        return _name();
    }

    function symbol()
        public
        view
        virtual
        override(Symbol, IERC721Metadata)
        returns (string memory)
    {
        return _symbol();
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(TokenURI, IERC721Metadata)
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString()))
                : "";
    }

    function approve(address to, uint256 tokenId)
        public
        virtual
        override(ApproveToken, IERC721)
    {
        address owner = _ownerOf(tokenId);
        require(to != owner, "ERC721: approval to current owner");

        require(
            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),
            "ERC721: approve caller is not owner nor approved for all"
        );

        _approve(to, tokenId);
    }

    function getApproved(uint256 tokenId)
        public
        view
        virtual
        override(GetApproved, IERC721)
        returns (address)
    {
        require(
            _exists(tokenId),
            "ERC721: approved query for nonexistent token"
        );

        return _tokenApprovals(tokenId);
    }

    function setApprovalForAll(address operator, bool approved)
        public
        virtual
        override(SetApprovalForAll, IERC721)
    {
        _setApprovalForAll(_msgSender(), operator, approved);
    }

    function isApprovedForAll(address owner, address operator)
        public
        view
        virtual
        override(IsApprovedForAll, IERC721)
        returns (bool)
    {
        return _operatorApprovals(owner)[operator];
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(TransferTokenIdFrom, IERC721) {
        //solhint-disable-next-line max-line-length
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );

        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(SafeTokenTransfer, IERC721) {
        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public virtual override(SafeTokenTransfer, IERC721) {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _safeTransfer(from, to, tokenId, _data);
    }
}
