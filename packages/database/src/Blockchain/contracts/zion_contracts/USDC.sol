// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "../token/ERC20/ERC20.sol";
import "../access/Ownable.sol";

contract USDC is ERC20, Ownable {
    constructor() ERC20("USDC", "USDC") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
