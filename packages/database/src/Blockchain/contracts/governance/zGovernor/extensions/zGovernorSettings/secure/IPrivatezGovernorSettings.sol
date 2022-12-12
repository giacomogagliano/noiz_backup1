// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

// import "../../../zGovernor.sol";
// import "../../../interfaces/IzGovernor.sol";
// import "../../../secure/PrivatezGovernor.sol";
// import "../../../secure/APrivatezGovernor.sol";
// import "../../../secure/IPrivatezGovernor.sol";

interface IPrivatezGovernorSettings {
    event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay);

    event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod);

    event ProposalThresholdSet(
        uint256 oldProposalThreshold,
        uint256 newProposalThreshold
    );
}
