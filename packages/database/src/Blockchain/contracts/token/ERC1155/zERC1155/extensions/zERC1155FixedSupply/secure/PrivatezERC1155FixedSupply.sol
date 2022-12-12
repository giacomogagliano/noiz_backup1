// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155FixedSupply.sol";
import "../../../../ERC1155.sol";
import "../../../../../../zion/lib/ZionLib.sol";

abstract contract PrivatezERC1155FixedSupply is
    APrivatezERC1155FixedSupply,
    ERC1155Struct
{
    mapping(uint256 => Supply) private __supply;

    modifier enoughMaxSupply(uint256 id, uint256 amount) {
        require(
            __supply[id].supply + amount <= __supply[id].maxSupply,
            "max supply exceeded"
        );
        _;
    }

    function _supply(uint256 id) internal view returns (Supply storage) {
        return __supply[id];
    }

    modifier mustNotExists(uint256 id) {
        require(_exists(id) == false, "Token id has already been minted");
        _;
    }

    function _exists(uint256 id) public view virtual returns (bool) {
        return __supply[id].supply > 0;
    }

    function _setMaxSupply(uint256 id, uint256 amount) internal virtual {
        __supply[id].maxSupply = amount;
    }

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override
    {
        super._beforeTokenTransfer(newTransfer);

        if (newTransfer.from == address(0)) {
            for (uint256 i = 0; i < newTransfer.ids.length; ++i) {
                __supply[newTransfer.ids[i]].supply += newTransfer.amounts[i];
            }
        }

        if (newTransfer.to == address(0)) {
            for (uint256 i = 0; i < newTransfer.ids.length; ++i) {
                __supply[newTransfer.ids[i]].supply -= newTransfer.amounts[i];
            }
        }
    }
}
