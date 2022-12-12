// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

interface IERC721Staking {
  function earned(address account) external view returns(uint256);
  function stake(uint256 id) external;
  function withdraw(uint256 id) external;
  function getReward() external;
}