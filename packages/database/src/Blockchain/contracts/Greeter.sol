//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    address public owner;
    string private greeting;
    bytes32 public giacomo = keccak256("giacomo");

    constructor(string memory _greeting) {
        greeting = _greeting;
        owner = msg.sender;
    }


    function greet() public view returns (string memory) {
        return greeting;
    }

    function getGiacomo() public view returns (bytes32) {
        return giacomo;
    }

    function setGreeting(string memory _greeting) public {
        require(msg.sender == owner, "error");
        greeting = _greeting;
    }
}
