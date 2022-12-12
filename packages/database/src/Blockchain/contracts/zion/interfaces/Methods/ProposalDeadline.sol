// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface ProposalDeadline {
    function proposalDeadline(uint256 proposalId)
        external
        view
        returns (uint256);
}
