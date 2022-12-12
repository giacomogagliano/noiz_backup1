// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezGovernorSettings.sol";

abstract contract APrivatezGovernorSettings is IPrivatezGovernorSettings {
    function _votingDelay() internal view virtual returns (uint256);

    function _votingPeriod() internal view virtual returns (uint256);

    function _proposalThreshold() internal view virtual returns (uint256);

    function _setVotingDelay(uint256 newVotingDelay) internal virtual;

    function _setVotingPeriod(uint256 newVotingPeriod) internal virtual;

    function _setProposalThreshold(uint256 newProposalThreshold)
        internal
        virtual;
}
