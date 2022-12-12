// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../../../zion/lib/zMaths.sol";
import "../../../../../zion/interfaces/OpenZeppelin.sol";
import "../../../../../utils/cryptography/ECDSA.sol";
import "../../../zCheckpointable.sol";

interface IPrivatezDelegateable {
    event DelegateChanged(
        address indexed delegator,
        address indexed fromDelegate,
        address indexed toDelegate
    );

    event DelegateVotesChanged(
        address indexed delegate,
        uint256 previousBalance,
        uint256 newBalance
    );
}
