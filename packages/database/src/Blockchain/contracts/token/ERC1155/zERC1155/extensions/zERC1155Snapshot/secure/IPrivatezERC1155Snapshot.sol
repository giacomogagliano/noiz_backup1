// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../../../../utils/Arrays.sol";
import "../../../../../../utils/Counters.sol";
import "../../../../../../zion/lib/ZionLib.sol";

interface IPrivatezERC1155Snapshot {
    struct Snapshots {
        uint256[] ids;
        uint256[] values;
    }

    event Snapshot(uint256 id);
}
