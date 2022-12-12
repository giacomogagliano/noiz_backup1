// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../token/ERC20/extensions/ERC20Snapshot.sol";

contract ERC20Snap is ERC20Snapshot {
    constructor() ERC20("ERC20 Snapshot", "ERC20s") {}

    function mint(address account, uint256 amount) public {
        _snapshot();
        _mint(account, amount);
    }
}
