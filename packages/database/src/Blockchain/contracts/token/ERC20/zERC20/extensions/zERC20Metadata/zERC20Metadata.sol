// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC20Metadata.sol";
import "./secure/PrivatezERC20Metadata.sol";

contract zERC20Metadata is IzERC20Metadata, PrivatezERC20Metadata {}
