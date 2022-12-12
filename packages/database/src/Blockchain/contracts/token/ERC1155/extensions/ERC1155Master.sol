// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../../utils/Arrays.sol";
import "../../../utils/Counters.sol";
import "../../../access/Ownable.sol";

import "./ERC1155Snapshot.sol";
import "hardhat/console.sol";

abstract contract ERC1155Master is ERC1155Snapshot, Ownable {
    // Inspired by Jordi Baylina's MiniMeToken to record historical balances:
    // https://github.com/Giveth/minimd/blob/ea04d950eea153a04c51fa510b068b9dded390cb/contracts/MiniMeToken.sol

    enum TokensId {
        MASTER,
        SHARES,
        COPIES
    }

    event UriSet(string newuri);
    event MasterDeposited(uint256 id);
    event TokenShopSet(address tokenShop);
    event CopyMinted(address to);

    string private _secretLink;
    mapping(TokensId => uint256) private _supply;
    Counters.Counter internal _copiesSupply;
    address internal _tokenShop;

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
            _msgSender() == _tokenShop,
            "ZION.ERC1155Master:: User is not allowed to call this function"
        );
        _;
    }

    function snapshot() external OnlyTokenShop {
        _snapshot();
    }

    function snapshotOnTransfer()
        public
        OnlyShareholders
        returns (bool, bytes memory)
    {
        // _snapshot();
        (bool success, bytes memory data) = _tokenShop.call(
            abi.encodeWithSignature(
                "dividendOnSharesTransfer()",
                "call dividendOnSharesTransfer"
            )
        );
        // console.log("ERC1155Master:: snapshotOnTransfer(): success",success);
        return (success, data);
    }

    function setTokenShop(address tokenShop) public onlyOwner {
        _tokenShop = tokenShop;
    }

    function mintCopy(address to) public OnlyTokenShop {
        _mintCopies(to, 1);
        emit CopyMinted(to);
    }

    function getCurrentSnapshotId()
        external
        view
        returns (uint256 currentSnapshotId)
    {
        currentSnapshotId = _getCurrentSnapshotId();
    }

    function getAccountBalanceOfShareSnapshot(address account)
        external
        view
        OnlyTokenShop
        returns (Snapshots memory accountBalanceOfSharesSnapshot)
    {
        accountBalanceOfSharesSnapshot = _accountBalanceOfIdsSnapshots[account][
            1
        ];
    }

    function sharesSupply() public view returns (uint256) {
        return _supply[TokensId.SHARES];
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
        emit UriSet(newuri);
    }

    function totalSharesSupply() public view returns (uint256) {
        return _supply[TokensId.SHARES];
    }

    function totalCopiesSupply() public view returns (uint256) {
        return _supply[TokensId.COPIES];
    }

    function _mintMaster() internal virtual returns (string memory) {
        _mint(address(this), uint256(TokensId.MASTER), 1, "0x00");

        emit MasterDeposited(1);

        return uri(0);
    }

    function _mintShares(uint256 amount) internal {
        _mint(_msgSender(), uint256(TokensId.SHARES), amount, "0x00");
        _supply[TokensId.SHARES] += amount;
    }

    function _mintCopies(address to, uint256 amount) internal {
        _mint(to, uint256(TokensId.COPIES), amount, "0x00");
        _supply[TokensId.COPIES] = _copiesSupply._value;
    }

    function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
        internal
        virtual
        override
    {
        super._beforeTokenTransfer(newTransfer);
        if (newTransfer.from == address(0)) {} else if (
            newTransfer.ids[0] == 1
        ) {
            // console.log("ERC1155Master:: called _beforeTokenTransfer()");
            snapshotOnTransfer();
        } else {}
    }
}
