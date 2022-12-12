//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Animal {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }
}
