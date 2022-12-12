// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20Pausable.sol";
import "./secure/PrivatezERC20Pausable.sol";

contract zERC20Pausable is IzERC20Pausable, PrivatezERC20Pausable {}
