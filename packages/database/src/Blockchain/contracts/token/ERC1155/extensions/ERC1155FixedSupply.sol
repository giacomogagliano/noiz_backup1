// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.3.2 (token/ERC1155/extensions/ERC1155Supply.sol)

pragma solidity ^0.8.0;

import "../ERC1155.sol";

abstract contract ERC1155FixedSupply is ERC1155Struct {
    using Address for address;

    struct Supply {
        uint256 supply;
        uint256 maxSupply;
    }

    mapping(uint256 => Supply) private _supply;

    modifier enoughMaxSupply(uint256 id, uint256 amount) {
        require(
            totalSupply(id) + amount <= maxSupply(id),
            "max supply exceeded"
        );
        _;
    }

    modifier mustNotExists(uint256 id) {
        require(exists(id) == false, "Token id has already been minted");
        _;
    }

    function maxSupply(uint256 id) public view returns (uint256) {
        return _supply[id].maxSupply;
    }

    function totalSupply(uint256 id) public view returns (uint256) {
        return _supply[id].supply;
    }

    function exists(uint256 id) public view virtual returns (bool) {
        return _supply[id].supply > 0;
    }

    function _setMaxSupply(uint256 id, uint256 amount) internal virtual {
        _supply[id].maxSupply = amount;
    }

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override
    {
        super._beforeTokenTransfer(newTransfer);

        if (newTransfer.from == address(0)) {
            for (uint256 i = 0; i < newTransfer.ids.length; ++i) {
                _supply[newTransfer.ids[i]].supply += newTransfer.amounts[i];
            }
        }

        if (newTransfer.to == address(0)) {
            for (uint256 i = 0; i < newTransfer.ids.length; ++i) {
                _supply[newTransfer.ids[i]].supply -= newTransfer.amounts[i];
            }
        }
    }
}
