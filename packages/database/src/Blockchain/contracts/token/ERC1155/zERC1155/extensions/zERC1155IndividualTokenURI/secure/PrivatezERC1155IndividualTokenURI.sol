// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155IndividualTokenURI.sol";

contract PrivatezERC1155IndividualTokenURI is
    APrivatezERC1155IndividualTokenURI
{
    mapping(uint256 => string) private __uris;

    function _uris(uint256 tokenId)
        internal
        view
        override
        returns (string memory)
    {
        return __uris[tokenId];
    }
}
