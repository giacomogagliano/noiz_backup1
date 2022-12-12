// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.3.2 (token/ERC1155/extensions/ERC1155Supply.sol)

pragma solidity ^0.8.0;

import "../ERC1155.sol";
import "../../../zion/lib/ZionLib.sol";

/**
 * @dev Extension of ERC1155 that adds tracking of total supply per id.
 *
 * Useful for scenarios where Fungible and Non-fungible tokens have to be
 * clearly identified. Note: While a totalSupply of 1 might mean the
 * corresponding is an NFT, there is no guarantees that no other token with the
 * same id are not going to be minted.
 */
abstract contract ERC1155Supply is ERC1155Struct {
    mapping(uint256 => uint256) private _totalSupply;

    /**
     * @dev Total amount of tokens in with a given id.
     */
    function totalSupply(uint256 id) public view virtual returns (uint256) {
        return _totalSupply[id];
    }

    /**
     * @dev Indicates whether any token exist with a given id, or not.
     */
    function exists(uint256 id) public view virtual returns (bool) {
        return ERC1155Supply.totalSupply(id) > 0;
    }

    /**
     * @dev See {ERC1155-_beforeTokenTransfer}.
     */
    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override
    {
        super._beforeTokenTransfer(newTransfer);

        if (newTransfer.from == address(0)) {
            for (uint256 i = 0; i < newTransfer.ids.length; ++i) {
                _totalSupply[newTransfer.ids[i]] += newTransfer.amounts[i];
            }
        }

        if (newTransfer.to == address(0)) {
            for (uint256 i = 0; i < newTransfer.ids.length; ++i) {
                _totalSupply[newTransfer.ids[i]] -= newTransfer.amounts[i];
            }
        }
    }
}
