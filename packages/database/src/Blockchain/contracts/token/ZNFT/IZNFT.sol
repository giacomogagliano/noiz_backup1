// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../access/Ownable.sol";
import "../../zion/lib/ZionLib.sol";
import "../../token/ERC1155/IERC1155.sol";

interface IZNFT is IERC1155 {
    function baseContract() external view returns (IERC1155);

    function assignedIds() external view returns (ZionLib.DefinedId memory);
}
