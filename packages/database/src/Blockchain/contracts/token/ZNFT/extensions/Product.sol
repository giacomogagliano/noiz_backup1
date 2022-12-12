// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../ZNFT.sol";

library zNFTProduct {}

abstract contract PhysicalSupport is CUnique {}

abstract contract Product is CUnique {}

abstract contract MusicPhysicalSupport is PhysicalSupport {}

abstract contract Vinyl is MusicPhysicalSupport {}

abstract contract CD is MusicPhysicalSupport {}

abstract contract Cassette is MusicPhysicalSupport {}

abstract contract MiniDisk is MusicPhysicalSupport {}

abstract contract Adat is MusicPhysicalSupport {}

abstract contract VinylFormats is Vinyl {}

abstract contract _12Inches is VinylFormats {}

abstract contract _9Inches is VinylFormats {}

abstract contract _7Inches is VinylFormats {}
