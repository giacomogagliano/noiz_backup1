// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface CastVote {
    function castVote(uint256 proposalId, uint8 support)
        external
        returns (uint256 balance);
}

interface CastVoteWithReason {
    function castVoteWithReason(
        uint256 proposalId,
        uint8 support,
        string calldata reason
    ) external returns (uint256 balance);
}

interface CastVoteBySig {
    function castVoteBySig(
        uint256 proposalId,
        uint8 support,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint256 balance);
}
