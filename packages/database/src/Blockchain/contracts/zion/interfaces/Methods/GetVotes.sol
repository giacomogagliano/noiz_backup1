// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface GetVotes {
    function getVotes(address account, uint256 blockNumber)
        external
        view
        returns (uint256);
}
