// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC1155Wrapper.sol";

interface IzERC1155Wrapper is IPrivatezERC1155Wrapper {
    function depositFor(
        address account,
        uint256 amount,
        bytes memory data
    ) external returns (bool);

    function withdrawTo(
        address account,
        uint256 amount,
        bytes memory data
    ) external returns (bool);
}
