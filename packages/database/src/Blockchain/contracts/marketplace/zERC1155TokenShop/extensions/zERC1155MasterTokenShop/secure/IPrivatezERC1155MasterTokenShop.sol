// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../../../utils/Arrays.sol";
import "../../../../../utils/Counters.sol";
import "../../../interfaces/IzERC1155TokenShop.sol";
import "../../../../../token/ERC1155/extensions/IERC1155Snapshot.sol";
import "../../../../../token/ERC1155/extensions/IERC1155Master.sol";

interface IPrivatezERC1155MasterTokenShop {
    struct Snapshots {
        uint256[] ids;
        uint256[] values;
    }

    struct Dividends {
        uint256[] ids;
        uint256[] values;
    }

    event Dividend(uint256 id);

    event SnapshotTokenSet(
        IERC1155Master ierc1155master,
        uint256 idUsedAsShares
    );
}
