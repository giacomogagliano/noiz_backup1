// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "./APrivatezERC721.sol";
import "../../../../utils/Context.sol";

contract PrivatezERC721 is Context, APrivatezERC721 {
    using Address for address;

    string private __name;
    string private __symbol;
    mapping(uint256 => address) private __owners;
    mapping(address => uint256) private __balances;
    mapping(uint256 => address) private __tokenApprovals;
    mapping(address => mapping(address => bool)) private __operatorApprovals;

    constructor(string memory name_, string memory symbol_) {
        __name = name_;
        __symbol = symbol_;
    }

    function _name() internal view override returns (string memory) {
        return __name;
    }

    function _symbol() internal view override returns (string memory) {
        return __symbol;
    }

    function _balances(address owner)
        internal
        view
        virtual
        override
        returns (uint256)
    {
        return __balances[owner];
    }

    function _owners(uint256 tokenId)
        internal
        view
        virtual
        override
        returns (address)
    {
        return __owners[tokenId];
    }

    function _tokenApprovals(uint256 tokenId)
        internal
        view
        override
        returns (address)
    {
        return __tokenApprovals[tokenId];
    }

    function _operatorApprovals(address owner)
        internal
        view
        override
        returns (mapping(address => bool) storage)
    {
        return __operatorApprovals[owner];
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "";
    }

    function _ownerOf(uint256 tokenId)
        internal
        view
        virtual
        override
        returns (address)
    {
        address owner = __owners[tokenId];
        require(
            owner != address(0),
            "ERC721: owner query for nonexistent token"
        );
        return owner;
    }

    function _getApproved(uint256 tokenId)
        internal
        view
        virtual
        override
        returns (address)
    {
        require(
            _exists(tokenId),
            "ERC721: approved query for nonexistent token"
        );

        return _tokenApprovals(tokenId);
    }

    function _isApprovedForAll(address owner, address operator)
        internal
        view
        virtual
        override
        returns (bool)
    {
        return __operatorApprovals[owner][operator];
    }

    function _safeTransfer(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) internal virtual override {
        _transfer(from, to, tokenId);
        require(
            _checkOnERC721Received(from, to, tokenId, _data),
            "ERC721: transfer to non ERC721Receiver implementer"
        );
    }

    function _exists(uint256 tokenId)
        internal
        view
        virtual
        override
        returns (bool)
    {
        return __owners[tokenId] != address(0);
    }

    function _isApprovedOrOwner(address spender, uint256 tokenId)
        internal
        view
        virtual
        override
        returns (bool)
    {
        require(
            _exists(tokenId),
            "ERC721: operator query for nonexistent token"
        );
        address owner = _ownerOf(tokenId);
        return (spender == owner ||
            _getApproved(tokenId) == spender ||
            _isApprovedForAll(owner, spender));
    }

    function _safeMint(address to, uint256 tokenId) internal virtual override {
        _safeMint(to, tokenId, "");
    }

    function _safeMint(
        address to,
        uint256 tokenId,
        bytes memory _data
    ) internal virtual override {
        _mint(to, tokenId);
        require(
            _checkOnERC721Received(address(0), to, tokenId, _data),
            "ERC721: transfer to non ERC721Receiver implementer"
        );
    }

    function _mint(address to, uint256 tokenId) internal virtual override {
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _beforeTokenTransfer(address(0), to, tokenId);

        __balances[to] += 1;
        __owners[tokenId] = to;

        emit ERC721Lib.Transfer(address(0), to, tokenId);
    }

    function _burn(uint256 tokenId) internal virtual override {
        address owner = _ownerOf(tokenId);

        _beforeTokenTransfer(owner, address(0), tokenId);

        // Clear approvals
        _approve(address(0), tokenId);

        __balances[owner] -= 1;
        delete __owners[tokenId];

        emit ERC721Lib.Transfer(owner, address(0), tokenId);
    }

    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        require(
            _ownerOf(tokenId) == from,
            "ERC721: transfer of token that is not own"
        );
        require(to != address(0), "ERC721: transfer to the zero address");

        _beforeTokenTransfer(from, to, tokenId);

        // Clear approvals from the previous owner
        _approve(address(0), tokenId);

        __balances[from] -= 1;
        __balances[to] += 1;
        __owners[tokenId] = to;

        emit ERC721Lib.Transfer(from, to, tokenId);
    }

    function _approve(address to, uint256 tokenId) internal virtual override {
        __tokenApprovals[tokenId] = to;
        emit ERC721Lib.Approval(_ownerOf(tokenId), to, tokenId);
    }

    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal virtual override {
        require(owner != operator, "ERC721: approve to caller");
        __operatorApprovals[owner][operator] = approved;
        emit ERC721Lib.ApprovalForAll(owner, operator, approved);
    }

    function _checkOnERC721Received(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) private returns (bool) {
        if (to.isContract()) {
            try
                IERC721Receiver(to).onERC721Received(
                    _msgSender(),
                    from,
                    tokenId,
                    _data
                )
            returns (bytes4 retval) {
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert(
                        "ERC721: transfer to non ERC721Receiver implementer"
                    );
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {}
}
