// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezGovernor.sol";
import "../../../zion/interfaces/Methods.sol";
import "../../Governor.sol";

interface IzGovernorPartial is
    IPrivatezGovernor,
    Name,
    Version,
    HashProposal,
    ProposalSnapshot,
    ProposalDeadline
{}

interface IzGovernorModulesDependents is
    State,
    Propose,
    Execute,
    CastVote,
    CastVoteWithReason,
    CastVoteBySig
{}

interface IzGovernorModules is
    CountingMode,
    Quorum,
    HasVoted,
    GetVotes,
    VotingDelay,
    VotingPeriod
{}

interface IzGovernor is
    IPrivatezGovernor,
    IzGovernorPartial,
    IzGovernorModulesDependents,
    IzGovernorModules
{}
