// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezERC1155IndividualTokenURI.sol";

abstract contract APrivatezERC1155IndividualTokenURI is
    IPrivatezERC1155IndividualTokenURI
{
    function _uris(uint256 tokenId)
        internal
        view
        virtual
        returns (string memory);
}
