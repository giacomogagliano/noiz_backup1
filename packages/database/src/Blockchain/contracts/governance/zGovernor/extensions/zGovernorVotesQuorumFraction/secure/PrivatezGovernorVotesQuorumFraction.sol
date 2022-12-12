// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezGovernorVotesQuorumFraction.sol";
import "../../../zGovernor.sol";
import "../../../extensions/zGovernorVotes/zGovernorVotes.sol";

abstract contract PrivatezGovernorVotesQuorumFraction is
    zGovernor,
    zGovernorVotes,
    APrivatezGovernorVotesQuorumFraction
{
    uint256 private __quorumNumerator;

    function getVotes(address account, uint256 blockNumber)
        public
        view
        override(zGovernor, zGovernorVotes)
        returns (uint256)
    {}

    function _quorumNumerator() internal view virtual returns (uint256) {
        return __quorumNumerator;
    }

    function _quorumDenominator() internal view virtual returns (uint256) {
        return 100;
    }

    constructor(uint256 quorumNumeratorValue) {
        _updateQuorumNumerator(quorumNumeratorValue);
    }

    function _updateQuorumNumerator(uint256 newQuorumNumerator)
        internal
        virtual
    {
        require(
            newQuorumNumerator <= _quorumDenominator(),
            "GovernorVotesQuorumFraction: quorumNumerator over quorumDenominator"
        );

        uint256 oldQuorumNumerator = __quorumNumerator;
        __quorumNumerator = newQuorumNumerator;

        emit QuorumNumeratorUpdated(oldQuorumNumerator, newQuorumNumerator);
    }
}
