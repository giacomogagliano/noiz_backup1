// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../governance/Governor.sol";

interface State {
    function state(uint256 proposalId)
        external
        view
        returns (Governor.ProposalState);
}
