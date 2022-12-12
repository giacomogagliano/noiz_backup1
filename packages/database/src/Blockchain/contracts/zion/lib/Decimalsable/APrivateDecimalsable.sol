// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivateDecimalsable.sol";

abstract contract APrivateDecimalsable is IPrivateDecimalsable {
    function _decimals() internal view virtual returns (uint8);

    function _setDecimals(uint8 decimals_) internal virtual returns (bool);
}
