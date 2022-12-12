// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezSafeERC20New.sol";

abstract contract APrivatezSafeERC20New is IPrivatezSafeERC20New {
    function safeTransfer(
        IERC20 token,
        address to,
        uint256 value
    ) internal virtual;

    function safeTransferFrom(
        IERC20 token,
        address from,
        address to,
        uint256 value
    ) internal virtual;

    function safeApprove(
        IERC20 token,
        address spender,
        uint256 value
    ) internal virtual;

    function safeIncreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal virtual;

    function safeDecreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal virtual;

    function _callOptionalReturn(IERC20 token, bytes memory data)
        internal
        virtual;
}
