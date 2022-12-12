// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../utils/Context.sol";
import "../token/ERC20/IERC20.sol";

import "../token/ERC721/IERC721.sol";
import "./IERC721Staking.sol";

contract ERC721Staking is IERC721Staking, Context {
    IERC20 public rewardsToken;
    IERC721 public stakingToken;

    uint256 public rewardRate; /// tokens minted as reward per second
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;

    uint256 private _totalSupply;
    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balances;

    constructor(
        address _stakingToken,
        address _rewardsToken,
        uint256 _tokensRewardedPerSecond
    ) {
        rewardsToken = IERC20(_rewardsToken);
        stakingToken = IERC721(_stakingToken);
        rewardRate = _tokensRewardedPerSecond;
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

    function stake(uint256 id) external override updateReward(_msgSender()) {
        stakingToken.safeTransferFrom(_msgSender(), address(this), id);
        _totalSupply += 1;
        _balances[_msgSender()] += 1;
        _owners[id] = _msgSender();
    }

    function withdraw(uint256 id) external override updateReward(_msgSender()) {
        require(_owners[id] == _msgSender());
        _totalSupply -= 1;
        _balances[_msgSender()] -= 1;
        delete _owners[id];
        stakingToken.safeTransferFrom(address(this), _msgSender(), id);
    }

    function getReward() external override updateReward(_msgSender()) {
        uint256 reward = rewards[_msgSender()];
        rewards[_msgSender()] = 0;
        rewardsToken.transfer(_msgSender(), reward);
    }
}
