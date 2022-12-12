import { Signer, ethers } from "ethers";
import { ZERC1155TokenShop__factory } from "../types/contracts";
import contract from "./ERC1155TokenShop.sol/ERC1155TokenShop.json";

export const getERC1155TokenShop = (
  signer: Signer
): ZERC1155TokenShop__factory =>
  new ethers.ContractFactory(
    contract.abi,
    contract.bytecode,
    signer
  ) as ZERC1155TokenShop__factory;
