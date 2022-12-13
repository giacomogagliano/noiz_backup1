import { Signer, ethers } from "ethers";
import { SimpleStorage__factory } from "../types/contracts";
import contract from "./ERC1155IndividualUri.sol/ERC1155IndividualURI.json";

export const getSimpleStorage = (
  signer: Signer
): SimpleStorage__factory =>
  new ethers.ContractFactory(
    contract.abi,
    contract.bytecode,
    signer
  ) as SimpleStorage__factory;
