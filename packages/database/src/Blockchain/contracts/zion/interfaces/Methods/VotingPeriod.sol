// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface VotingPeriod {
    function votingPeriod() external view returns (uint256);
}

interface SetVotingPeriod {
    function setVotingPeriod(uint256 newVotingPeriod) external;
}
