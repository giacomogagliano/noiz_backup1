// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzSafeERC20New.sol";
import "./secure/PrivatezSafeERC20New.sol";

contract zSafeERC20New is IzSafeERC20New, PrivatezSafeERC20New {}
