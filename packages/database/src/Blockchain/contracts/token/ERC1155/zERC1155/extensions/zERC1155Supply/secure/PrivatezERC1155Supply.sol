// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155Supply.sol";
import "../../../zERC1155.sol";

abstract contract PrivatezERC1155Supply is zERC1155, APrivatezERC1155Supply {
    mapping(uint256 => uint256) private __totalSupply;

    function _totalSupply(uint256 id) internal view returns (uint256) {
        return __totalSupply[id];
    }

    function _addSupply(uint256 id, uint256 amount) internal returns (bool) {
        __totalSupply[id] += amount;
        return true;
    }

    function _subSupply(uint256 id, uint256 amount) internal returns (bool) {
        __totalSupply[id] -= amount;
        return true;
    }
}
