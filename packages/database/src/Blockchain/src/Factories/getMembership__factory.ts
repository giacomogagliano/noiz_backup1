import { Signer, ethers } from "ethers";
import { Membership__factory } from "../types/contracts";
import contract from "./Membership.sol/Membership.json";

export const getMembership = (signer: Signer): Membership__factory =>
  new ethers.ContractFactory(
    contract.abi,
    contract.bytecode,
    signer
  ) as Membership__factory;
