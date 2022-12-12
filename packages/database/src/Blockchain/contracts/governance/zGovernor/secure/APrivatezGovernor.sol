// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezGovernor.sol";
import "../../Governor.sol";

abstract contract APrivatezGovernorPartial is IPrivatezGovernor {
    function _name() internal view virtual returns (string memory);

    function _version() internal view virtual returns (string memory);

    function _proposals(uint256 proposalId)
        internal
        view
        virtual
        returns (Governor.ProposalCore storage);

    function _execute(
        uint256, /* proposalId */
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 /*descriptionHash*/
    ) internal virtual;

    function _hashProposal(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal pure virtual returns (uint256);

    function _executor() internal view virtual returns (address);
}

abstract contract APrivatezGovernorModulesDependants {
    function _state(uint256 proposalId)
        internal
        view
        virtual
        returns (Governor.ProposalState);

    function _cancel(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal virtual returns (uint256);

    function _castVote(
        uint256 proposalId,
        address account,
        uint8 support,
        string memory reason
    ) internal virtual returns (uint256);
}

abstract contract APrivatezGovernorModules {
    function _getVotes(address account, uint256 blockNumber)
        internal
        view
        virtual
        returns (uint256);

    function _quorumReached(uint256 proposalId)
        internal
        view
        virtual
        returns (bool);

    function _voteSucceeded(uint256 proposalId)
        internal
        view
        virtual
        returns (bool);

    function _countVote(
        uint256 proposalId,
        address account,
        uint8 support,
        uint256 weight
    ) internal virtual;
}

abstract contract APrivatezGovernor is
    APrivatezGovernorPartial,
    APrivatezGovernorModulesDependants,
    APrivatezGovernorModules
{}
