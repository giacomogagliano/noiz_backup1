// // SPDX-License-Identifier: MIT
// // Tweaked version to be compatible with ERC1155Snapshot
// // OpenZeppelin Contracts v4.3.2 (token/ERC1155/ERC1155.sol)

// pragma solidity ^0.8.0;

// import "../../token/ERC1155/extensions/ERC1155FixedSupply.sol";
// import "../../token/ERC1155/extensions/ERC1155IndividualTokenUri.sol";
// import "../../token/ERC1155/ERC1155.sol";
// import "../../token/ZNFT/extensions/ZNFTSharable.sol";

// contract IndividualUniqueSharable is
//     ERC1155FixedSupply,
//     ERC1155IndividualTokenUri,
//     ZNFTSharable
// {
//     function uri(uint256 tokenId)
//         public
//         view
//         override(ERC1155IndividualTokenUri, ERC1155)
//         returns (string memory)
//     {
//         return ERC1155IndividualTokenUri.uri(tokenId);
//     }

//     constructor(
//         string memory newuri,
//         uint256 sharesAmount,
//         uint256 supply,
//         uint256 freeMintBadges_
//     ) ERC1155(newuri) {
//         definedIds[0] = _shares;
//         definedIds[1] = _mintBadges;
//         definedIds[2] = _freeMintBadges;
//         _shares.amount = sharesAmount;
//         _mintBadges.amount = supply - freeMintBadges_;
//         _freeMintBadges.amount = freeMintBadges_;
//         _setMaxSupply(_shares.id, _shares.amount);
//         _setMaxSupply(_mintBadges.id, _mintBadges.amount);
//         _setMaxSupply(_freeMintBadges.id, _freeMintBadges.amount);
//         for (
//             uint256 i = definedIds.length - 1;
//             i < supply + definedIds.length - 1;
//             i++
//         ) {
//             _setMaxSupply(i, 1);
//         }
//     }

//     /**
//      * @dev This function allows minting only an amount of 1. This makes it
//      * similar to an ERC-721.
//      */
//     function mint(address to, uint256 id)
//         public
//         enoughMaxSupply(id, 1)
//         mustNotExists(id)
//     {
//         _mint(to, id, 1, "0x00");
//     }

//     function getDefinedTokenIds()
//         public
//         view
//         returns (ZionLib.DefinedId[3] memory)
//     {
//         return _definedIds;
//     }

//     function _beforeTokenTransfer(ZionLib.TokenTransfer memory newTransfer)
//         internal
//         virtual
//         override(ERC1155, ERC1155FixedSupply)
//     {
//         super._beforeTokenTransfer(newTransfer);
//     }
// }
