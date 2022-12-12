// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../zion/lib/ZionLib.sol";
import "../../../access/Ownable.sol";
import "../../ERC721/ERC721.sol";
import "../../ERC20/ERC20.sol";
import "../ZNFT.sol";

contract Profile is Ownable {
    using ZionLib for ZionLib.DefinedId;

    mapping(uint256 => ERC721) public creations;
    ERC20 internal _profileToken;

    string private _uri;

    constructor(string memory name) {
        _uri = name;
    }

    function setName(string memory name) public onlyOwner {
        _uri = name;
    }

    function create(string memory name_, string memory symbol_)
        public
        onlyOwner
        returns (ERC721)
    {
        ERC721 creation = new ERC721(name_, symbol_);
        return creation;
    }

    function profileTokenSupply() public view returns (uint256) {
        return _profileToken.totalSupply();
    }
}

abstract contract ProfileNew is P, PPro {}

abstract contract User is ProfileNew {}

abstract contract Creator is ProfileNew {}
