// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface IERC1155Snapshot {
    function balanceOfAt(
        address account,
        uint256 id,
        uint256 snapshotId
    ) external view returns (uint256);

    function totalSupply(uint256 id) external view returns (uint256);

    function totalSupplyAt(uint256 id, uint256 snapshotId)
        external
        view
        returns (uint256);
}
