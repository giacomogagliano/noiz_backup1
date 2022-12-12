// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import './interfaces/IzNFTnew.sol';
import './secure/PrivatezNFTnew.sol';

contract zNFTnew is IzNFTnew, PrivatezNFTnew {}
