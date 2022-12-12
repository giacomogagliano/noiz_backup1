// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../token/ERC1155/extensions/ERC1155Snapshot.sol";

contract ERC1155Snap is ERC1155Snapshot {
    constructor() ERC1155Struct("ERC1155Snap") {}

    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public {
        _snapshot();
        _mint(to, id, amount, data);
    }

    function snapshot() public {
        _snapshot();
    }
}
