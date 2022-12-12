// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzGovernorVotesQuorumFraction.sol";
import "./secure/PrivatezGovernorVotesQuorumFraction.sol";

abstract contract zGovernorVotesQuorumFraction is
    IzGovernorVotesQuorumFraction,
    PrivatezGovernorVotesQuorumFraction
{
    function quorumNumerator() public view virtual returns (uint256) {
        return _quorumNumerator();
    }

    function quorumDenominator() public view virtual returns (uint256) {
        return _quorumDenominator();
    }

    function quorum(uint256 blockNumber)
        public
        view
        virtual
        override
        returns (uint256)
    {
        return
            (token.getPastTotalSupply(blockNumber) * quorumNumerator()) /
            quorumDenominator();
    }

    function updateQuorumNumerator(uint256 newQuorumNumerator)
        external
        virtual
        onlyGovernance
    {
        _updateQuorumNumerator(newQuorumNumerator);
    }
}
