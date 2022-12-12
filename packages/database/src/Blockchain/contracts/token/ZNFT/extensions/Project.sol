// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../ERC721/ERC721.sol";
import "../../../utils/Counters.sol";

contract Task {
    using Counters for Counters.Counter;
    Task public parentTask;
    mapping(uint256 => mapping(address => uint256)) internal _subAssignee;

    constructor(Task parent) {
        parentTask = parent;
    }

    function crateSubTask() public {}
}
