// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface HasVoted {
    function hasVoted(uint256 proposalId, address account)
        external
        view
        returns (bool);
}
