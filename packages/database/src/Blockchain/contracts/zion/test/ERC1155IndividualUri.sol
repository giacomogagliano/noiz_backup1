// SPDX-License-Identifier: MIT
// Tweaked version to be compatible with ERC1155Snapshot
// OpenZeppelin Contracts v4.3.2 (token/ERC1155/ERC1155.sol)

pragma solidity ^0.8.0;

import "../../token/ERC1155/ERC1155.sol";

contract ERC1155IndividualURI is ERC1155 {
    // @dev Private member which stores each in
    mapping(uint256 => string) private _uris;

    constructor(string memory newuri) ERC1155(newuri) {}

    function mint(address to, uint256 id) public {
        _mint(to, id, 1, "0x00");
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return (_uris[tokenId]);
    }

    function setTokenUri(uint256 tokenId, string memory uri_) public {
        _uris[tokenId] = uri_;
    }
}
