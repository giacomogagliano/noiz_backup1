// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors
// This is a tweaked version of a contract by Smart Contract Programmer which
// on his side was derived by the Synthetix Staking Smart Contract

pragma solidity ^0.8.0;

import "../utils/Context.sol";

import "../token/ERC1155/IERC1155.sol";
import "./IERC1155Staking.sol";

contract ERC1155StakingReward is IERC1155Staking, Context {
    IERC1155 public rewardsToken;
    uint256 public rewardsTokenId;
    IERC1155 public stakingToken;
    uint256 public stakingTokenId;

    uint256 public rewardRate;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;

    uint256 private _totalSupply;
    mapping(address => uint256) private _balances;

    constructor(
        address _stakingToken,
        address _rewardsToken,
        uint256 _rewardRate
    ) {
        rewardsToken = IERC1155(_rewardsToken);
        stakingToken = IERC1155(_stakingToken);
        rewardRate = _rewardRate;
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;

        rewards[account] = earned(account);
        userRewardPerTokenPaid[account] = rewardPerTokenStored;
        _;
    }

    function rewardPerToken() public view returns (uint256) {
        if (_totalSupply == 0) {
            return 0;
        }
        return
            rewardPerTokenStored +
            ((rewardRate * (block.timestamp - lastUpdateTime) * 1e18) /
                _totalSupply);
    }

    function earned(address account) public view override returns (uint256) {
        return
            ((_balances[account] *
                (rewardPerToken() - userRewardPerTokenPaid[account])) / 1e18) +
            rewards[account];
    }

    function stake(uint256 amount)
        external
        override
        updateReward(_msgSender())
    {
        stakingToken.safeTransferFrom(
            _msgSender(),
            address(this),
            stakingTokenId,
            amount,
            ""
        );
        _totalSupply += amount;
        _balances[_msgSender()] += amount;
    }

    function withdraw(uint256 amount)
        external
        override
        updateReward(_msgSender())
    {
        _totalSupply -= amount;
        _balances[_msgSender()] -= amount;
        stakingToken.safeTransferFrom(
            address(this),
            _msgSender(),
            stakingTokenId,
            amount,
            ""
        );
    }

    function getReward() external override updateReward(_msgSender()) {
        uint256 reward = rewards[_msgSender()];
        rewards[_msgSender()] = 0;
        rewardsToken.safeTransferFrom(
            address(this),
            _msgSender(),
            rewardsTokenId,
            reward,
            ""
        );
    }
}
