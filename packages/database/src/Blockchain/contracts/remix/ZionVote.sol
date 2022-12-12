// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;
import "../token/ERC20/extensions/ERC20Wrapper.sol";
import "../token/ERC20/extensions/ERC20Votes.sol";

contract ZionVote is ERC20Wrapper, ERC20Votes {
    constructor(IERC20 _underlyingToken)
        ERC20Wrapper(_underlyingToken)
        ERC20("Zion Vote", "vZION")
        ERC20Permit("Zion Vote")
    {}

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }

    function _mint(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(account, amount);
    }
}
