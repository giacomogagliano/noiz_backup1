// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface IERC1155VestingWallet {
  event ERC1155Released(uint256 id, uint256 amount);

  function beneficiary() external view returns(address);
  function start() external view returns(uint256);
  function duration() external view returns(uint256);
  function released( uint256 id) external view returns(uint256);
  function release( uint256 id) external;
  function vestedAmount(uint256 id, uint64 timestamp) external view returns(uint256);
}