// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezGovernorVotes.sol";

interface IzGovernorVotes is IPrivatezGovernorVotes {
    function getVotes(address account, uint256 blockNumber)
        external
        view
        returns (uint256);
}
