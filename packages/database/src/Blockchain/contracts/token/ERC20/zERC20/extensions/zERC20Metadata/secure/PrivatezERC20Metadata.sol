// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC20Metadata.sol";
import "../../../zERC20.sol";
import "../../../../../../zion/mixins/Nameable/extensions/Nameable.sol";
import "../../../../../../zion/mixins/Symbolable/extensions/Symbolable.sol";
import "../../../../../../zion/lib/Decimalsable/extensions/Decimalsable.sol";

contract PrivatezERC20Metadata is
    APrivatezERC20Metadata,
    Nameable,
    Symbolable,
    Decimalsable,
    zERC20
{}
