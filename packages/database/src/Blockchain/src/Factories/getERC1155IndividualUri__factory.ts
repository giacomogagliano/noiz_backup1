import { Signer, ethers } from "ethers";
import { NoizContractFactory } from "../../../EVM";
import { ERC1155IndividualURI__factory } from "../types/contracts";
import contract from "./ERC1155IndividualUri.sol/ERC1155IndividualURI.json";

export const getERC1155IndividualURI = (
  signer: Signer
): ERC1155IndividualURI__factory =>
  new ethers.ContractFactory(
    contract.abi,
    contract.bytecode,
    signer
  ) as ERC1155IndividualURI__factory;

export const ERC1155IndividualURIFactory =
  new NoizContractFactory<ERC1155IndividualURI__factory>(
    contract
  );
