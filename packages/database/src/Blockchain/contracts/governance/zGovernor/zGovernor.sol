// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzGovernor.sol";
import "./secure/PrivatezGovernor.sol";

contract zGovernorPartial is
    Context,
    PrivatezGovernorPartial,
    IzGovernorPartial
{
    using Timers for Timers.BlockNumber;

    function name() public view virtual override returns (string memory) {
        return _name();
    }

    function version() public view virtual override returns (string memory) {
        return "1";
    }

    function hashProposal(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) public pure virtual override returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encode(targets, values, calldatas, descriptionHash)
                )
            );
    }

    function proposalSnapshot(uint256 proposalId)
        public
        view
        virtual
        override
        returns (uint256)
    {
        return _proposals(proposalId).voteStart.getDeadline();
    }

    function proposalDeadline(uint256 proposalId)
        public
        view
        virtual
        override
        returns (uint256)
    {
        return _proposals(proposalId).voteEnd.getDeadline();
    }

    function proposalThreshold() public view virtual returns (uint256) {
        return 0;
    }
}

abstract contract zGovernor is
    Context,
    EIP712,
    ERC165,
    IzGovernor,
    PrivatezGovernor,
    IGovernor
{
    using Timers for Timers.BlockNumber;
    using SafeCast for uint256;
    modifier onlyGovernance() {
        require(_msgSender() == _executor(), "Governor: onlyGovernance");
        _;
    }

    bytes32 public constant BALLOT_TYPEHASH =
        keccak256("Ballot(uint256 proposalId,uint8 support)");

    constructor(string memory name_) EIP712(name_, version()) {}

    ///////////////////

    function name()
        public
        view
        virtual
        override(IGovernor, Name)
        returns (string memory)
    {
        return _name();
    }

    function version()
        public
        view
        virtual
        override(IGovernor, Version)
        returns (string memory)
    {
        return "1";
    }

    function hashProposal(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) public pure virtual override(IGovernor, HashProposal) returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encode(targets, values, calldatas, descriptionHash)
                )
            );
    }

    function proposalSnapshot(uint256 proposalId)
        public
        view
        virtual
        override(IGovernor, ProposalSnapshot)
        returns (uint256)
    {
        return _proposals(proposalId).voteStart.getDeadline();
    }

    function proposalDeadline(uint256 proposalId)
        public
        view
        virtual
        override(IGovernor, ProposalDeadline)
        returns (uint256)
    {
        return _proposals(proposalId).voteEnd.getDeadline();
    }

    function proposalThreshold() public view virtual returns (uint256) {
        return 0;
    }

    //////////////////

    receive() external payable virtual {
        require(_executor() == address(this));
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC165)
        returns (bool)
    {
        return
            interfaceId == type(IGovernor).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function state(uint256 proposalId)
        public
        view
        virtual
        override(IGovernor, State)
        returns (Governor.ProposalState)
    {
        return _state(proposalId);
    }

    function propose(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description
    ) public virtual override(IGovernor, Propose) returns (uint256) {
        require(
            getVotes(msg.sender, block.number - 1) >= proposalThreshold(),
            "GovernorCompatibilityBravo: proposer votes below proposal threshold"
        );

        uint256 proposalId = hashProposal(
            targets,
            values,
            calldatas,
            keccak256(bytes(description))
        );

        require(
            targets.length == values.length,
            "Governor: invalid proposal length"
        );
        require(
            targets.length == calldatas.length,
            "Governor: invalid proposal length"
        );
        require(targets.length > 0, "Governor: empty proposal");

        Governor.ProposalCore storage proposal = _proposals(proposalId);
        require(
            proposal.voteStart.isUnset(),
            "Governor: proposal already exists"
        );

        uint64 snapshot = block.number.toUint64() + votingDelay().toUint64();
        uint64 deadline = snapshot + votingPeriod().toUint64();

        proposal.voteStart.setDeadline(snapshot);
        proposal.voteEnd.setDeadline(deadline);

        emit GovernorLib.ProposalCreated(
            proposalId,
            _msgSender(),
            targets,
            values,
            new string[](targets.length),
            calldatas,
            snapshot,
            deadline,
            description
        );

        return proposalId;
    }

    function execute(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) public payable virtual override(IGovernor, Execute) returns (uint256) {
        uint256 proposalId = hashProposal(
            targets,
            values,
            calldatas,
            descriptionHash
        );

        Governor.ProposalState status = state(proposalId);
        require(
            status == IGovernor.ProposalState.Succeeded ||
                status == IGovernor.ProposalState.Queued,
            "Governor: proposal not successful"
        );
        _proposals(proposalId).executed = true;

        emit GovernorLib.ProposalExecuted(proposalId);

        _execute(proposalId, targets, values, calldatas, descriptionHash);

        return proposalId;
    }

    function castVote(uint256 proposalId, uint8 support)
        public
        virtual
        override(IGovernor, CastVote)
        returns (uint256)
    {
        address voter = _msgSender();
        return _castVote(proposalId, voter, support, "");
    }

    function castVoteWithReason(
        uint256 proposalId,
        uint8 support,
        string calldata reason
    ) public virtual override(IGovernor, CastVoteWithReason) returns (uint256) {
        address voter = _msgSender();
        return _castVote(proposalId, voter, support, reason);
    }

    function castVoteBySig(
        uint256 proposalId,
        uint8 support,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public virtual override(IGovernor, CastVoteBySig) returns (uint256) {
        address voter = ECDSA.recover(
            _hashTypedDataV4(
                keccak256(abi.encode(BALLOT_TYPEHASH, proposalId, support))
            ),
            v,
            r,
            s
        );
        return _castVote(proposalId, voter, support, "");
    }

    //////// MODULES
    function COUNTING_MODE()
        public
        pure
        virtual
        override(IGovernor, CountingMode)
        returns (string memory);

    function getVotes(address account, uint256 blockNumber)
        public
        view
        virtual
        override(IGovernor, GetVotes)
        returns (uint256);

    function votingDelay()
        public
        view
        virtual
        override(IGovernor, VotingDelay)
        returns (uint256);

    function votingPeriod()
        public
        view
        virtual
        override(IGovernor, VotingPeriod)
        returns (uint256);

    function hasVoted(uint256 proposalId, address account)
        public
        view
        virtual
        override(IGovernor, HasVoted)
        returns (bool);

    function quorum(uint256 blockNumber)
        public
        view
        virtual
        override(IGovernor, Quorum)
        returns (uint256);
}
