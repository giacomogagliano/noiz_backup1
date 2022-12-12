// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../governance/Governor.sol";
import "../governance/IGovernor.sol";
import "../governance/extensions/GovernorSettings.sol";
import "../governance/extensions/GovernorCountingSimple.sol";
import "../governance/extensions/GovernorVotes.sol";
import "../governance/extensions/GovernorVotesQuorumFraction.sol";

contract ZionGovernor is
    Governor,
    GovernorSettings,
    GovernorCountingSimple,
    GovernorVotes,
    GovernorVotesQuorumFraction
{
    event ZionGovernorCreated(
        address deployer,
        string name,
        uint256 votingDelay,
        uint256 votingPeriod,
        uint256 proposalThreshold,
        ERC20Votes votingToken,
        uint256 quorumFraction
    );

    constructor(
        ERC20Votes _token,
        string memory _name,
        uint256 _votingDelay,
        uint256 _votingPeriod,
        uint256 _proposalThreshold,
        uint256 _quorumFraction
    )
        Governor(_name)
        GovernorSettings(_votingDelay, _votingPeriod, _proposalThreshold)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(_quorumFraction)
    {
        emit ZionGovernorCreated(
            msg.sender,
            _name,
            _votingDelay,
            _votingPeriod,
            _proposalThreshold,
            _token,
            _quorumFraction
        );
    }

    // The following functions are overrides required by Solidity.

    function votingDelay()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingDelay();
    }

    function votingPeriod()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingPeriod();
    }

    function quorum(uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }

    function getVotes(address account, uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotes)
        returns (uint256)
    {
        return super.getVotes(account, blockNumber);
    }

    function proposalThreshold()
        public
        view
        override(Governor, GovernorSettings)
        returns (uint256)
    {
        return super.proposalThreshold();
    }

    function voteSucceded(uint256 proposalId) public view returns (bool) {
        return _voteSucceeded(proposalId);
    }

    function quorumReached(uint256 proposalId) public view returns (bool) {
        return _quorumReached(proposalId);
    }

    function executor() public view returns (address) {
        return _executor();
    }
}
