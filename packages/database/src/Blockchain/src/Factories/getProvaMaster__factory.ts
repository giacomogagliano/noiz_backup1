import { Signer, ethers } from "ethers";
import { ProvaMaster__factory } from "../types/contracts";
import contract from "./ProvaMaster.sol/ProvaMaster.json";

export const getProvaMaster = (signer: Signer): ProvaMaster__factory =>
  new ethers.ContractFactory(
    contract.abi,
    contract.bytecode,
    signer
  ) as ProvaMaster__factory;
