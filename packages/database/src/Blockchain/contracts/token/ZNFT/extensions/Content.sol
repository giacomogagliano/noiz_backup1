// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../ZNFT.sol";

abstract contract Content is CUnique {}

abstract contract Tweets is Content {}

abstract contract BlogPost is Content {}

abstract contract Track is Content {}

abstract contract Album is Content {}
