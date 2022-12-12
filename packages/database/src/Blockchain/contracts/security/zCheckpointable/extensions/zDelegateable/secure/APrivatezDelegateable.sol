// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./IPrivatezDelegateable.sol";

abstract contract APrivatezDelegateable is IPrivatezDelegateable {
    // function balanceOf(address account) public view virtual returns (uint256);

    function _hashTypedDataV4(bytes32 structHash)
        internal
        view
        virtual
        returns (bytes32);

    function _useNonce(address owner)
        internal
        virtual
        returns (uint256 current);
}
