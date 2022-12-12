// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface IERC1155Master {
    struct Snapshots {
        uint256[] ids;
        uint256[] values;
    }

    function balanceOf(address account, uint256 id)
        external
        view
        returns (uint256);

    function balanceOfAt(
        address account,
        uint256 id,
        uint256 snapshotId
    ) external view returns (uint256);

    function getAccountBalanceOfShareSnapshot(address account)
        external
        view
        returns (Snapshots memory accountBalanceOfSharesSnapshot);

    function totalSupply(uint256 id) external view returns (uint256);

    function totalSupplyAt(uint256 id, uint256 snapshotId)
        external
        view
        returns (uint256);

    function snapshot() external;

    function setTokenShop(address tokenShop) external;

    function mintCopy(address to) external;

    function getCurrentSnapshotId()
        external
        view
        returns (uint256 currentSnapshotId);

    function sharesSupply() external returns (uint256);
}
