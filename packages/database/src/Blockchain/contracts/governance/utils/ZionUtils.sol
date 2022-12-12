// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

contract ZionUtils {
    function stringToBytes(string memory description_)
        public
        pure
        returns (bytes memory)
    {
        return bytes(description_);
    }

    function hexToNumber(bytes32 hex_) public pure returns (uint256) {
        return uint256(hex_);
    }

    function getBlockNumber() public view returns (uint256) {
        return block.number;
    }
}
