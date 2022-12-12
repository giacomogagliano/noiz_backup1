// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

contract SimpleStorage {
    string public myString = "";
    uint256 private _myNumber = 0;

    function setString(string memory myString_) public {
        myString = myString_;
    }

    function getNumber() public view returns (uint256) {
        return _myNumber;
    }

    function setNumber(uint256 number_) public {
        _myNumber = number_;
    }
}
