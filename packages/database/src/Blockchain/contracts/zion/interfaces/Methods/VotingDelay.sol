// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface VotingDelay {
    function votingDelay() external view returns (uint256);
}

interface SetVotingDelay {
    function setVotingDelay(uint256 newVotingDelay) external;
}
