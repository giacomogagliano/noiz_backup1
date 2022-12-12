// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezGovernor.sol";

contract PrivatezGovernorPartial is APrivatezGovernorPartial {
    string private __name;
    mapping(uint256 => Governor.ProposalCore) private __proposals;

    function _name() internal view virtual override returns (string memory) {
        return __name;
    }

    function _version() internal view virtual override returns (string memory) {
        return "1";
    }

    function _proposals(uint256 proposalId)
        internal
        view
        virtual
        override
        returns (Governor.ProposalCore storage)
    {
        return __proposals[proposalId];
    }

    function _execute(
        uint256, /* proposalId */
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 /*descriptionHash*/
    ) internal virtual override {
        string memory errorMessage = "Governor: call reverted without message";
        for (uint256 i = 0; i < targets.length; ++i) {
            (bool success, bytes memory returndata) = targets[i].call{
                value: values[i]
            }(calldatas[i]);
            Address.verifyCallResult(success, returndata, errorMessage);
        }
    }

    function _hashProposal(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal pure virtual override returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encode(targets, values, calldatas, descriptionHash)
                )
            );
    }

    function _executor() internal view virtual override returns (address) {
        return address(this);
    }
}

abstract contract PrivatezGovernor is
    PrivatezGovernorPartial,
    APrivatezGovernorModulesDependants,
    APrivatezGovernorModules
{
    using Timers for Timers.BlockNumber;

    function _state(uint256 proposalId)
        internal
        view
        virtual
        override
        returns (Governor.ProposalState)
    {
        Governor.ProposalCore memory proposal = _proposals(proposalId);

        if (proposal.executed) {
            return IGovernor.ProposalState.Executed;
        } else if (proposal.canceled) {
            return IGovernor.ProposalState.Canceled;
        } else if (proposal.voteStart.getDeadline() >= block.number) {
            return IGovernor.ProposalState.Pending;
        } else if (proposal.voteEnd.getDeadline() >= block.number) {
            return IGovernor.ProposalState.Active;
        } else if (proposal.voteEnd.isExpired()) {
            return
                _quorumReached(proposalId) && _voteSucceeded(proposalId)
                    ? IGovernor.ProposalState.Succeeded
                    : IGovernor.ProposalState.Defeated;
        } else {
            revert("Governor: unknown proposal id");
        }
    }

    function _cancel(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal virtual override returns (uint256) {
        uint256 proposalId = _hashProposal(
            targets,
            values,
            calldatas,
            descriptionHash
        );
        Governor.ProposalState status = _state(proposalId);

        require(
            status != IGovernor.ProposalState.Canceled &&
                status != IGovernor.ProposalState.Expired &&
                status != IGovernor.ProposalState.Executed,
            "Governor: proposal not active"
        );
        _proposals(proposalId).canceled = true;

        emit GovernorLib.ProposalCanceled(proposalId);

        return proposalId;
    }

    function _castVote(
        uint256 proposalId,
        address account,
        uint8 support,
        string memory reason
    ) internal virtual override returns (uint256) {
        Governor.ProposalCore storage proposal = _proposals(proposalId);
        require(
            _state(proposalId) == IGovernor.ProposalState.Active,
            "Governor: vote not currently active"
        );

        uint256 weight = _getVotes(account, proposal.voteStart.getDeadline());
        _countVote(proposalId, account, support, weight);

        emit GovernorLib.VoteCast(account, proposalId, support, weight, reason);

        return weight;
    }

    // MODULES

    function _getVotes(address account, uint256 blockNumber)
        internal
        view
        virtual
        override
        returns (uint256);

    function _quorumReached(uint256 proposalId)
        internal
        view
        virtual
        override
        returns (bool);

    function _voteSucceeded(uint256 proposalId)
        internal
        view
        virtual
        override
        returns (bool);

    function _countVote(
        uint256 proposalId,
        address account,
        uint8 support,
        uint256 weight
    ) internal virtual override;
}
