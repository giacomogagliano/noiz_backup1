// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../token/ERC1155/extensions/IERC1155Receiver.sol";
import "../../utils/cryptography/ECDSA.sol";
import "../../utils/cryptography/EIP712.sol";
import "../../utils/introspection/ERC165.sol";
import "../../utils/Address.sol";
import "../../utils/Context.sol";
import "../../utils/Strings.sol";
import "../../utils/math/SafeCast.sol";
import "../../utils/math/Math.sol";
import "../../utils/Timers.sol";

library ZionLib {
    using Address for address;
    using SafeCast for uint256;
    using Timers for Timers.BlockNumber;

    ///// STRUCTS /////////////////////////////////////////////

    struct DefinedId {
        uint256 id;
        uint256 amount;
    }

    struct TokenTransferSingle {
        address operator;
        address from;
        address to;
        uint256 id;
        uint256 amount;
        bytes data;
    }

    struct TokenTransfer {
        address operator;
        address from;
        address to;
        uint256[] ids;
        uint256[] amounts;
        bytes data;
    }

    struct ERC721Metadata {
        string name;
    }

    struct ZNFTMetadata {
        string name;
        address baseContractId;
    }

    struct ProfileMetadata {
        string name;
        address contractId;
    }

    struct ProposalCore {
        Timers.BlockNumber voteStart;
        Timers.BlockNumber voteEnd;
        bool executed;
        bool canceled;
    }

    struct ProposalVote {
        uint256 againstVotes;
        uint256 forVotes;
        uint256 abstainVotes;
        mapping(address => bool) hasVoted;
    }

    //// EVENTS /////////////////////////////////////////////

    event TransferSingle(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint256 id,
        uint256 value
    );

    event TransferBatch(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint256[] ids,
        uint256[] values
    );

    event ApprovalForAll(
        address indexed account,
        address indexed operator,
        bool approved
    );

    event Transfer(address indexed from, address indexed to, uint256 value);

    event ProposalCreated(
        uint256 proposalId,
        address proposer,
        address[] targets,
        uint256[] values,
        string[] signatures,
        bytes[] calldatas,
        uint256 startBlock,
        uint256 endBlock,
        string description
    );

    event ProposalExecuted(uint256 proposalId);

    event ProposalCanceled(uint256 proposalId);

    event VoteCast(
        address indexed voter,
        uint256 proposalId,
        uint8 support,
        uint256 weight,
        string reason
    );
    event VotingDelaySet(uint256 oldVotingDelay, uint256 newVotingDelay);

    event VotingPeriodSet(uint256 oldVotingPeriod, uint256 newVotingPeriod);

    event ProposalThresholdSet(
        uint256 oldProposalThreshold,
        uint256 newProposalThreshold
    );

    ///////ENUMS /////////////////////////////////////////////

    enum TokenIdsTypes {
        MEMBERSHIP,
        SHARES,
        CREATORS,
        TEAM,
        DAO,
        MINT_ACCESS,
        FREE_MINT_ACCESS
    }

    enum TokenIdZnft {
        SHARES
    }

    enum Types {
        PROFILE,
        PRODUCT
    }

    enum ProductStatus {
        PROJECT,
        STARTUP,
        CLOSED
    }

    enum Profile {
        USER,
        CREATOR,
        PROJECT
    }

    enum Promotion {
        INVITATION,
        SHAREVOUCER
    }

    enum ProposalState {
        Pending,
        Active,
        Canceled,
        Defeated,
        Succeeded,
        Queued,
        Expired,
        Executed
    }

    enum VoteType {
        Against,
        For,
        Abstain
    }

    //////FUNCTIONS /////////////////////////////////////////////

    function _ERC20afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal {}

    function _ERC20beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal {}

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newtransfer)
        internal
    {}

    function _beforeTokenTransfer(
        ZionLib.TokenTransferSingle memory newtransfer
    ) internal {}

    function _doSafeTransferAcceptanceCheck(
        address operator,
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal {
        if (to.isContract()) {
            try
                IERC1155Receiver(to).onERC1155Received(
                    operator,
                    from,
                    id,
                    amount,
                    data
                )
            returns (bytes4 response) {
                if (response != IERC1155Receiver.onERC1155Received.selector) {
                    revert("ERC1155: ERC1155Receiver rejected tokens");
                }
            } catch Error(string memory reason) {
                revert(reason);
            } catch {
                revert("ERC1155: transfer to non ERC1155Receiver implementer");
            }
        }
    }

    function _doSafeBatchTransferAcceptanceCheck(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal {
        if (to.isContract()) {
            try
                IERC1155Receiver(to).onERC1155BatchReceived(
                    operator,
                    from,
                    ids,
                    amounts,
                    data
                )
            returns (bytes4 response) {
                if (
                    response != IERC1155Receiver.onERC1155BatchReceived.selector
                ) {
                    revert("ERC1155: ERC1155Receiver rejected tokens");
                }
            } catch Error(string memory reason) {
                revert(reason);
            } catch {
                revert("ERC1155: transfer to non ERC1155Receiver implementer");
            }
        }
    }

    function createTokenTransferSingle(
        address operator,
        address to,
        address from,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal pure returns (TokenTransferSingle memory) {
        TokenTransferSingle memory newTransfer;
        newTransfer.operator = operator;
        newTransfer.from = from;
        newTransfer.to = to;
        newTransfer.id = id;
        newTransfer.amount = amount;
        newTransfer.data = data;
        return newTransfer;
    }

    function createTokenTransfer(
        address operator,
        address to,
        address from,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal pure returns (TokenTransfer memory) {
        TokenTransfer memory newTransfer;
        newTransfer.operator = operator;
        newTransfer.from = from;
        newTransfer.to = to;
        newTransfer.ids = ids;
        newTransfer.amounts = amounts;
        newTransfer.data = data;
        return newTransfer;
    }

    function _asSingletonArray(uint256 element)
        internal
        pure
        returns (uint256[] memory)
    {
        uint256[] memory array = new uint256[](1);
        array[0] = element;

        return array;
    }

    function _asSingletonAddressArray(address element)
        internal
        pure
        returns (address[] memory)
    {
        address[] memory array = new address[](1);
        array[0] = element;

        return array;
    }

    function _asArraySingleton(uint256[] memory array)
        internal
        pure
        returns (uint256)
    {
        uint256 element;
        element = array[0];
        return element;
    }

    ///////MODIFIERS
    modifier NonZeroAddress(address testTarget) {
        require(
            testTarget != address(0),
            "ERC20: transfer from the zero address"
        );
        _;
    }

    modifier EnoughBalance(uint256 senderBalance, uint256 amount) {
        require(
            senderBalance >= amount,
            "ERC20: transfer amount exceeds balance"
        );
        _;
    }
}
