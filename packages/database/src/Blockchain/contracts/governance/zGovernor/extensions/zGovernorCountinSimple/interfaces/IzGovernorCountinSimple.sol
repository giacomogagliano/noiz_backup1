// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezGovernorCountinSimple.sol";

interface IzGovernorCountinSimple is IPrivatezGovernorCountinSimple {
    function COUNTING_MODE() external pure returns (string memory);

    function hasVoted(uint256 proposalId, address account)
        external
        view
        returns (bool);

    function proposalVotes(uint256 proposalId)
        external
        view
        returns (
            uint256 againstVotes,
            uint256 forVotes,
            uint256 abstainVotes
        );
}
