// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../secure/IPrivatezERC20TotalSupplyBalanceAllowancesPermit.sol";

interface IzERC20TotalSupplyBalanceAllowancesPermit is
    IPrivatezERC20TotalSupplyBalanceAllowancesPermit
{
    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    function nonces(address owner) external view returns (uint256);

    function DOMAIN_SEPARATOR() external view returns (bytes32);
}
