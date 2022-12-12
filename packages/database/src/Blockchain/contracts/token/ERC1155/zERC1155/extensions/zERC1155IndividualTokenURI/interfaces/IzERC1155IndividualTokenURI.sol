// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC1155IndividualTokenURI.sol";

interface IzERC1155IndividualTokenURI is IPrivatezERC1155IndividualTokenURI {
    function uri(uint256 tokenId) external view returns (string memory);
}
