// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivateDecimalsable.sol";

contract PrivateDecimalsable is APrivateDecimalsable {
    uint8 private decimals;

    function _decimals() internal view override returns (uint8) {
        return decimals;
    }

    function _setDecimals(uint8 decimals_) internal override returns (bool) {
        decimals = decimals_;
        return true;
    }
}
