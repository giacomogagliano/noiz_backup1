// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezGovernorCountinSimple.sol";

abstract contract APrivatezGovernorCountinSimple is
    IPrivatezGovernorCountinSimple
{
    function _proposalVotes(uint256 proposalId)
        internal
        view
        virtual
        returns (ProposalVote storage);
}
