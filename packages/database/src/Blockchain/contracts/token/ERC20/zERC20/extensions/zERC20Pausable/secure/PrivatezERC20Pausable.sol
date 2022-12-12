// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20Pausable.sol";
import "../../../zERC20.sol";
import "../../../../../../zion/lib/Pausable/index.sol";

contract PrivatezERC20Pausable is APrivatezERC20Pausable, zERC20, Pausable {}
