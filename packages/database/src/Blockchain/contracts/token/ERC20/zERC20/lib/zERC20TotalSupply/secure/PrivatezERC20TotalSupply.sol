// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20TotalSupply.sol";
import "../../../../../../utils/Context.sol";

contract PrivatezERC20TotalSupply is APrivatezERC20TotalSupply {
    uint256 private __totalSupply;

    function _totalSupply()
        internal
        view
        override(APrivatezERC20TotalSupply)
        returns (uint256)
    {
        return __totalSupply;
    }

    function _addSupply(uint256 amount) internal override {
        __totalSupply += amount;
    }

    function _subSupply(uint256 amount) internal override {
        __totalSupply -= amount;
    }
}
