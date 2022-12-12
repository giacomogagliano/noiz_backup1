// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155IndividualTokenURI.sol";
import "./secure/PrivatezERC1155IndividualTokenURI.sol";

contract zERC1155IndividualTokenURI is
    IzERC1155IndividualTokenURI,
    PrivatezERC1155IndividualTokenURI
{
    function uri(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        return (_uris(tokenId));
    }
}
