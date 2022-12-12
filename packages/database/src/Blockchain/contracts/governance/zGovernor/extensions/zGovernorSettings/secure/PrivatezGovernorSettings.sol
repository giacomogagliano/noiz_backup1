// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezGovernorSettings.sol";

// zGovernor,
abstract contract PrivatezGovernorSettings is APrivatezGovernorSettings {
    uint256 private __votingDelay;
    uint256 private __votingPeriod;
    uint256 private __proposalThreshold;

    constructor(
        uint256 initialVotingDelay,
        uint256 initialVotingPeriod,
        uint256 initialProposalThreshold
    ) {
        _setVotingDelay(initialVotingDelay);
        _setVotingPeriod(initialVotingPeriod);
        _setProposalThreshold(initialProposalThreshold);
    }

    function _votingDelay()
        internal
        view
        override(APrivatezGovernorSettings)
        returns (uint256)
    {
        return __votingDelay;
        // TODO check who sets the voting period
    }

    function _votingPeriod()
        internal
        view
        override(APrivatezGovernorSettings)
        returns (uint256)
    {
        return __votingPeriod;
    }

    function _proposalThreshold()
        internal
        view
        override(APrivatezGovernorSettings)
        returns (uint256)
    {
        return __proposalThreshold;
    }

    function _setVotingDelay(uint256 newVotingDelay)
        internal
        virtual
        override(APrivatezGovernorSettings)
    {
        emit VotingDelaySet(__votingDelay, newVotingDelay);
        // TODO check who sets the voting period
        __votingDelay = newVotingDelay;
        // TODO check who sets the voting period
    }

    function _setVotingPeriod(uint256 newVotingPeriod)
        internal
        virtual
        override(APrivatezGovernorSettings)
    {
        // voting period must be at least one block long
        require(newVotingPeriod > 0, "GovernorSettings: voting period too low");
        emit VotingPeriodSet(__votingPeriod, newVotingPeriod);
        __votingPeriod = newVotingPeriod;
    }

    function _setProposalThreshold(uint256 newProposalThreshold)
        internal
        virtual
        override(APrivatezGovernorSettings)
    {
        emit ProposalThresholdSet(__proposalThreshold, newProposalThreshold);
        __proposalThreshold = newProposalThreshold;
    }
}
