// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../../../../utils/Counters.sol";
import "../../../../../../access/Ownable.sol";
import "../../../../../../zion/lib/ZionLib.sol";

interface IPrivatezERC1155Master {
    enum TokensId {
        MASTER,
        SHARES,
        COPIES
    }

    event UriSet(string newuri);

    event MasterDeposited(uint256 id);

    event TokenShopSet(address tokenShop);

    event CopyMinted(address to);
}
