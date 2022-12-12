// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../ERC1155.sol";

abstract contract ERC1155IndividualTokenUri is ERC1155Struct {
    mapping(uint256 => string) private _uris;

    function uri(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        return (_uris[tokenId]);
    }

    function setTokenUri(uint256 tokenId, string memory uri_) public {
        _uris[tokenId] = uri_;
    }
}
