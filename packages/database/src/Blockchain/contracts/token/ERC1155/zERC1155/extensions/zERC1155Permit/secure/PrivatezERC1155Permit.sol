// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155Permit.sol";
import "../../../../../../utils/cryptography/EIP712.sol";
import "../../../zERC1155.sol";

abstract contract PrivatezERC1155Permit is
    EIP712,
    zERC1155,
    APrivatezERC1155Permit
{
    using Counters for Counters.Counter;

    mapping(address => Counters.Counter) private __nonces;

    bytes32 private immutable __PERMIT_TYPEHASH =
        keccak256(
            "Permit(address owner,address spender,uint256 id,uint256 value,uint256 nonces,uint256 deadline)"
        );

    constructor(string memory name) EIP712(name, "1") {}

    function _nonces(address owner)
        internal
        view
        returns (Counters.Counter storage)
    {
        return __nonces[owner];
    }

    function _PERMIT_TYPEHASH() internal view returns (bytes32) {
        return __PERMIT_TYPEHASH;
    }

    function _useNonce(address owner)
        internal
        virtual
        returns (uint256 current)
    {
        Counters.Counter storage nonce = __nonces[owner];
        current = nonce.current();
        nonce.increment();
    }
}
