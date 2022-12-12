// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC721.sol";
import "../../../../utils/introspection/IERC165.sol";
import "../../../../zion/interfaces/Methods.sol";

interface IzERC721 is
    IPrivatezERC721,
    IERC165,
    BalanceOfOwner,
    OwnerOf,
    Name,
    Symbol,
    TokenURI,
    ApproveToken,
    GetApproved,
    SetApprovalForAll,
    IsApprovedForAll,
    TransferTokenIdFrom,
    SafeTokenTransfer
{
    function supportsInterface(bytes4 interfaceId)
        external
        view
        override(IERC165)
        returns (bool);
}
