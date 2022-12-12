// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface IERC1155Staking {
  function earned(address account) external view returns(uint256);
  function stake(uint amount) external;
  function withdraw(uint256 amount) external;
  function getReward() external;
}