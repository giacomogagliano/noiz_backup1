// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./interfaces/IzERC1155Supply.sol";
import "./secure/PrivatezERC1155Supply.sol";

abstract contract zERC1155Supply is IzERC1155Supply, PrivatezERC1155Supply {
    function totalSupply(uint256 id) public view virtual returns (uint256) {
        return _totalSupply(id);
    }

    function exists(uint256 id) public view virtual returns (bool) {
        return _totalSupply(id) > 0;
    }

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override
    {
        super._beforeTokenTransfer(newTransfer);

        if (newTransfer.from == address(0)) {
            for (uint256 i = 0; i < newTransfer.ids.length; ++i) {
                _addSupply(newTransfer.ids[i], newTransfer.amounts[i]);
            }
        }

        if (newTransfer.to == address(0)) {
            for (uint256 i = 0; i < newTransfer.ids.length; ++i) {
                _subSupply(newTransfer.ids[i], newTransfer.amounts[i]);
            }
        }
    }
}
