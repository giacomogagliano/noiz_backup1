// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezERC20Wrapper.sol";

abstract contract APrivatezERC20Wrapper is IPrivatezERC20Wrapper {
    function _recover(address account) internal virtual returns (uint256);
}
