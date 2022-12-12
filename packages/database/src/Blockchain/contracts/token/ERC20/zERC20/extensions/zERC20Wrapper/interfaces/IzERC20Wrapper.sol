// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC20Wrapper.sol";

interface IzERC20Wrapper is IPrivatezERC20Wrapper {
    function depositFor(address account, uint256 amount)
        external
        returns (bool);

    function withdrawTo(address account, uint256 amount)
        external
        returns (bool);
}
