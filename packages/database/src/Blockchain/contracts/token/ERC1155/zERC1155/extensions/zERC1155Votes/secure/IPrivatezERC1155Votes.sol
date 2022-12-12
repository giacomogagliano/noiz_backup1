// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../../../../utils/math/Math.sol";
import "../../../../../../utils/math/SafeCast.sol";
import "../../../../../../utils/cryptography/ECDSA.sol";
import "../../../../../../zion/lib/zMaths.sol";

interface IPrivatezERC1155Votes {
    struct Checkpoint {
        uint256 fromBlock;
        uint224 votes;
    }

    event DelegateChanged(
        address indexed delegator,
        uint256 id,
        address indexed fromDelegatee,
        address indexed toDelegatee
    );

    event DelegateVotesChanged(
        address indexed delegate,
        uint256 id,
        uint256 previousBalance,
        uint256 newBalance
    );
}
