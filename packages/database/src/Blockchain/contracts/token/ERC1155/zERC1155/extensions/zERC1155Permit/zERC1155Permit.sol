// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155Permit.sol";
import "./secure/PrivatezERC1155Permit.sol";

abstract contract zERC1155Permit is IzERC1155Permit, PrivatezERC1155Permit {
    using Counters for Counters.Counter;

    function permit(
        address owner,
        address spender,
        uint256 id,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public virtual override {
        require(block.timestamp <= deadline, "ERC1155Permit: expired deadline");

        bytes32 structHash = keccak256(
            abi.encode(
                _PERMIT_TYPEHASH(),
                owner,
                spender,
                id,
                value,
                _useNonce(owner),
                deadline
            )
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, v, r, s);
        require(signer == owner, "ERC1155Permit: invalid signature");

        _setApprovalForAll(owner, spender, true);
    }

    function nonces(address owner)
        public
        view
        virtual
        override
        returns (uint256)
    {
        return _nonces(owner).current();
    }

    function DOMAIN_SEPARATOR() external view override returns (bytes32) {
        return _domainSeparatorV4();
    }
}
