// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezGovernorCountinSimple.sol";
import "../../../zGovernor.sol";

abstract contract PrivatezGovernorCountinSimple is
    zGovernor,
    APrivatezGovernorCountinSimple
{
    mapping(uint256 => ProposalVote) private __proposalVotes;

    function _quorumReached(uint256 proposalId)
        internal
        view
        virtual
        override
        returns (bool)
    {
        ProposalVote storage proposalvote = _proposalVotes(proposalId);

        return
            quorum(proposalSnapshot(proposalId)) <=
            proposalvote.forVotes + proposalvote.abstainVotes;
    }

    function _voteSucceeded(uint256 proposalId)
        internal
        view
        virtual
        override
        returns (bool)
    {
        ProposalVote storage proposalvote = _proposalVotes(proposalId);

        return proposalvote.forVotes > proposalvote.againstVotes;
    }

    function _countVote(
        uint256 proposalId,
        address account,
        uint8 support,
        uint256 weight
    ) internal virtual override {
        ProposalVote storage proposalvote = _proposalVotes(proposalId);

        require(
            !proposalvote.hasVoted[account],
            "GovernorVotingSimple: vote already cast"
        );
        proposalvote.hasVoted[account] = true;

        if (support == uint8(VoteType.Against)) {
            proposalvote.againstVotes += weight;
        } else if (support == uint8(VoteType.For)) {
            proposalvote.forVotes += weight;
        } else if (support == uint8(VoteType.Abstain)) {
            proposalvote.abstainVotes += weight;
        } else {
            revert("GovernorVotingSimple: invalid value for enum VoteType");
        }
    }

    function _proposalVotes(uint256 proposalId)
        internal
        view
        override
        returns (ProposalVote storage)
    {
        return __proposalVotes[proposalId];
    }
}
