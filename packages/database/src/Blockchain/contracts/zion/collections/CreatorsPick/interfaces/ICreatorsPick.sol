// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivateCreatorsPick.sol";

interface ICreatorsPick is IPrivateCreatorsPick {
    function addCreator(address creator) external returns (bool);

    function addChoice(uint256 id) external returns (bool);

    function deleteChoice(uint256 id) external returns (bool);

    function creatorChoices(address creator)
        external
        view
        returns (uint256[] memory);
}
