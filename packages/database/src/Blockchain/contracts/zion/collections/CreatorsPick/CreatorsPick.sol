// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/ICreatorsPick.sol";
import "./secure/PrivateCreatorsPick.sol";
import "../../../utils/Context.sol";

contract CreatorsPick is Context, ICreatorsPick, PrivateCreatorsPick {
    constructor()
        PrivateCreatorsPick(
            0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,
            0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,
            2
        )
    {}

    function addCreator(address creator) public override returns (bool) {
        return _addCreator(creator);
    }

    function addChoice(uint256 id) public override returns (bool) {
        return _addChoice(_msgSender(), id);
    }

    function deleteChoice(uint256 id) public override returns (bool) {
        return _deleteChoice(_msgSender(), id);
    }

    function creatorChoices(address creator)
        public
        view
        override
        returns (uint256[] memory)
    {
        return _creatorChoices(creator);
    }
}
