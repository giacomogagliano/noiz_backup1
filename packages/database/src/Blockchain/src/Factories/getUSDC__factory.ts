import { Signer, ethers } from "ethers";
import { USDC__factory } from "../types/contracts";
import contract from "./USDC.sol/USDC.json";

export const getUSDC = (signer: Signer): USDC__factory =>
  new ethers.ContractFactory(
    contract.abi,
    contract.bytecode,
    signer
  ) as USDC__factory;
