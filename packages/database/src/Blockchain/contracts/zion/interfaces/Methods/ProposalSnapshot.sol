// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface ProposalSnapshot {
    function proposalSnapshot(uint256 proposalId)
        external
        view
        returns (uint256);
}
