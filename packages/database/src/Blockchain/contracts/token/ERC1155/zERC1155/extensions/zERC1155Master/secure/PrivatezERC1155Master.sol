// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC1155Master.sol";
import "../../../zERC1155.sol";

import "../../../extensions/zERC1155Snapshot/zERC1155Snapshot.sol";

abstract contract PrivatezERC1155Master is
    zERC1155,
    zERC1155Snapshot,
    APrivatezERC1155Master,
    Ownable
{
    // TODO use secret link
    string private __secretLink;
    mapping(TokensId => uint256) private __supply;
    Counters.Counter private __copiesSupply;
    address private __tokenShop;

    constructor(uint256 sharesAmount) {
        _mintMaster();
        _mintShares(sharesAmount);
    }

    modifier OnlyShareholders() {
        address operator = _msgSender();
        uint256 shareBalanceOfOperator = balanceOf(
            operator,
            uint256(TokensId.SHARES)
        );
        require(
            shareBalanceOfOperator >= 0,
            "ZION.ERC1155MasterTokenShop:: User is not allowed to call this function"
        );
        _;
    }

    modifier OnlyTokenShop() {
        require(
            _msgSender() == __tokenShop,
            "ZION.ERC1155Master:: User is not allowed to call this function"
        );
        _;
    }

    function _supply(TokensId tokensId) internal view returns (uint256) {
        return __supply[tokensId];
    }

    function _tokenShop() internal view returns (address) {
        return __tokenShop;
    }

    function _setTokenShop(address tokenShop_) internal returns (bool) {
        __tokenShop = tokenShop_;
        return true;
    }

    function _mintMaster() internal virtual returns (string memory) {
        _mint(address(this), uint256(TokensId.MASTER), 1, "0x00");

        emit MasterDeposited(1);

        return uri(0);
    }

    function _mintShares(uint256 amount) internal {
        _mint(_msgSender(), uint256(TokensId.SHARES), amount, "0x00");
        __supply[TokensId.SHARES] += amount;
    }

    function _mintCopies(address to, uint256 amount) internal {
        _mint(to, uint256(TokensId.COPIES), amount, "0x00");
        __supply[TokensId.COPIES] = __copiesSupply._value;
    }

    function _snapshotOnTransfer()
        internal
        OnlyShareholders
        returns (bool, bytes memory)
    {
        // _snapshot();
        (bool success, bytes memory data) = __tokenShop.call(
            abi.encodeWithSignature(
                "dividendOnSharesTransfer()",
                "call dividendOnSharesTransfer"
            )
        );
        // console.log("ERC1155Master:: snapshotOnTransfer(): success",success);
        return (success, data);
    }

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override(PrivatezERC1155, PrivatezERC1155Snapshot)
    {
        super._beforeTokenTransfer(newTransfer);
        if (newTransfer.from == address(0)) {} else if (
            newTransfer.ids[0] == 1
        ) {
            // console.log("ERC1155Master:: called _beforeTokenTransfer()");
            _snapshotOnTransfer();
        } else {}
    }
}
