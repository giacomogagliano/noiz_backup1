// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface ProposalThreshold {
    function proposalThreshold() external view returns (uint256);
}

interface SetPropostalThreshold {
    function setProposalThreshold(uint256 newProposalThreshold) external;
}
