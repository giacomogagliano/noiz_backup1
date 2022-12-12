// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../ERC721/zERC721/zERC721.sol";
import "../ERC1155/zERC1155/zERC1155.sol";
import "../../governance/zGovernor/zGovernor.sol";

library zNFT {
    enum Licences {
        COMMERCIAL,
        PRIVATE
    }

    enum Unique {
        COPYRIGHT,
        INTELLECTUAL_PROPERTY
    }

    enum Domain {
        PHYSICAL,
        DIGITAL
    }
}

abstract contract CUnique is zERC721 {}

abstract contract C is zERC1155 {}

// SubProduct
abstract contract Z is zERC1155, IERC1155Receiver {
    // type tuple is [address,uint256]
    C[] public baseContracts;
    mapping(C => uint256[]) baseContractsIds;
}

// Creator
abstract contract P is zERC1155, IzGovernor, IERC1155Receiver {
    C[] public baseContracts;
    mapping(C => uint256[]) baseContractsIds;
    Z[] public baseZContracts;
    mapping(Z => uint256[]) baseZContractsIds;
    IzGovernor governance;

    function addBaseContract(C newBaseContract) public virtual;
}

abstract contract PPro is zERC1155, IzGovernor, IERC1155Receiver {
    mapping(C => uint256[]) baseContractsIdsPro;
    mapping(Z => uint256[]) baseZContractsIdsPro;
    IzGovernor governancePro;

    function create() public virtual;
}

contract ZNFT {

}

// interface Ciccia {
//     function bloo() internal view returns (bool);
// }
