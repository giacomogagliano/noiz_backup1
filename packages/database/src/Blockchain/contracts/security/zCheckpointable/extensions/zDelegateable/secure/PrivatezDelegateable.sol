// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezDelegateable.sol";

// TODO #171 @giacomogagliano unabstract this
abstract contract PrivatezDelegateable is
    zCheckpointable,
    APrivatezDelegateable
{
    IERC20 baseContract;
    mapping(address => address) private __delegates;
    bytes32 private constant __DELEGATION_TYPEHASH =
        keccak256(
            "Delegation(address delegatee,uint256 nonce,uint256 expiry)"
        );

    function __moveVotingPower(
        address src,
        address dst,
        uint256 amount
    ) private {
        if (src != dst && amount > 0) {
            if (src != address(0)) {
                (
                    uint256 oldWeight,
                    uint256 newWeight
                ) = _writeCheckpoint(
                        _checkpoints(src),
                        zMaths._subtract,
                        amount
                    );
                emit DelegateVotesChanged(
                    src,
                    oldWeight,
                    newWeight
                );
            }

            if (dst != address(0)) {
                (
                    uint256 oldWeight,
                    uint256 newWeight
                ) = _writeCheckpoint(
                        _checkpoints(dst),
                        zMaths._add,
                        amount
                    );
                emit DelegateVotesChanged(
                    dst,
                    oldWeight,
                    newWeight
                );
            }
        }
    }

    function _delegates(address account)
        internal
        view
        returns (address)
    {
        return __delegates[account];
    }

    function _setDelegates(
        address delegator,
        address delegatee
    ) internal {
        __delegates[delegator] = delegatee;
    }

    function _DELEGATION_TYPEHASH()
        internal
        pure
        returns (bytes32)
    {
        return __DELEGATION_TYPEHASH;
    }

    function _delegate(
        address delegator,
        address delegatee
    ) internal virtual {
        address currentDelegate = _delegates(delegator);
        uint256 delegatorBalance = baseContract.balanceOf(
            delegator
        );
        _setDelegates(delegator, delegatee);

        emit DelegateChanged(
            delegator,
            currentDelegate,
            delegatee
        );

        __moveVotingPower(
            currentDelegate,
            delegatee,
            delegatorBalance
        );
    }
}
