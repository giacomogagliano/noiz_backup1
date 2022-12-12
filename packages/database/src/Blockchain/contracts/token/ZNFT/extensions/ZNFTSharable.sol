// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../ERC1155/ERC1155.sol";
import "../../../zion/lib/ZionLib.sol";

abstract contract ZNFTSharable is ERC1155 {
    using ZionLib for ZionLib.DefinedId;

    ZionLib.DefinedId internal _shares = ZionLib.DefinedId(0, 0);
    ZionLib.DefinedId internal _mintBadges = ZionLib.DefinedId(1, 0);
    ZionLib.DefinedId internal _freeMintBadges = ZionLib.DefinedId(2, 0);
    ZionLib.DefinedId[3] internal _definedIds;

    function shares() public view returns (ZionLib.DefinedId memory) {
        return _shares;
    }

    function mintBadges() public view returns (ZionLib.DefinedId memory) {
        return _mintBadges;
    }

    function freeMintBadges() public view returns (ZionLib.DefinedId memory) {
        return _freeMintBadges;
    }

    function definedId() public view returns (ZionLib.DefinedId[3] memory) {
        return _definedIds;
    }
}
