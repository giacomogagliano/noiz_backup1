// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155Master.sol";
import "./secure/PrivatezERC1155Master.sol";

abstract contract zERC1155Master is IzERC1155Master, PrivatezERC1155Master {
    function snapshot() external OnlyTokenShop {
        _snapshot();
    }

    function snapshotOnTransfer()
        public
        OnlyShareholders
        returns (bool, bytes memory)
    {
        (bool success, bytes memory data) = _tokenShop().call(
            abi.encodeWithSignature(
                "dividendOnSharesTransfer()",
                "call dividendOnSharesTransfer"
            )
        );
        return (success, data);
    }

    function setTokenShop(address tokenShop_) public onlyOwner returns (bool) {
        return _setTokenShop(tokenShop_);
    }

    function mintCopy(address to) public OnlyTokenShop {
        _mintCopies(to, 1);
        emit CopyMinted(to);
    }

    function getCurrentSnapshotId()
        external
        view
        returns (uint256 currentSnapshotId)
    {
        currentSnapshotId = _getCurrentSnapshotId();
    }

    function getAccountBalanceOfShareSnapshot(address account)
        external
        view
        OnlyTokenShop
        returns (Snapshots memory accountBalanceOfSharesSnapshot)
    {
        accountBalanceOfSharesSnapshot = _accountBalanceOfIdsSnapshots(account)[
            1
        ];
    }

    function sharesSupply() public view returns (uint256) {
        return _supply(TokensId.SHARES);
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
        emit UriSet(newuri);
    }

    function totalSharesSupply() public view returns (uint256) {
        return _supply(TokensId.SHARES);
    }

    function totalCopiesSupply() public view returns (uint256) {
        return _supply(TokensId.COPIES);
    }
}
