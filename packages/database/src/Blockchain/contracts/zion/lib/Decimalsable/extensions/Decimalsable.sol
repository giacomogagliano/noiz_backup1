// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IDecimalsable.sol";
import "../PrivateDecimalsable.sol";

contract Decimalsable is IDecimalsable, PrivateDecimalsable {
    function decimals() external view returns (uint8) {
        return _decimals();
    }
}
