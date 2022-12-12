// // SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// import "../../governance/ZionGovernor.sol";
// import "../../token/ERC1155/zERC1155/extensions/zERC1155FixedSupply/zERC1155FixedSupply.sol";

// contract testZnft is ZionGovernor, zERC1155FixedSupply {
//     constructor(
//         ERC20Votes _token,
//         string memory _name,
//         uint256 _votingDelay,
//         uint256 _votingPeriod,
//         uint256 _proposalThreshold,
//         uint256 _quorumFraction,
//         string memory uri_
//     )
//         ZionGovernor(
//             _token,
//             _name,
//             _votingDelay,
//             _votingPeriod,
//             _proposalThreshold,
//             _quorumFraction
//         )
//         ERC1155(uri_)
//     {}

//     function supportsInterface(bytes4 interfaceId)
//         public
//         view
//         virtual
//         override(ERC1155, Governor)
//         returns (bool)
//     {
//         return super.supportsInterface(interfaceId);
//     }
// }
