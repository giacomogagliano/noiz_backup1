// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezERC20TotalSupply.sol";

abstract contract APrivatezERC20TotalSupply is IPrivatezERC20TotalSupply {
    function _totalSupply() internal view virtual returns (uint256);

    function _addSupply(uint256 amount) internal virtual;

    function _subSupply(uint256 amount) internal virtual;
}
