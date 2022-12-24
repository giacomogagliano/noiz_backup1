// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezGovernorVotes.sol";
import "../../../zGovernor.sol";
import "../../../../../token/ERC20/extensions/ERC20Votes.sol";

abstract contract PrivatezGovernorVotes is
    zGovernor,
    APrivatezGovernorVotes
{
    // TODO #168  @giacomogagliano usare zERC20Votes
    ERC20Votes public immutable token;

    constructor(ERC20Votes tokenAddress) {
        token = tokenAddress;
    }
}
