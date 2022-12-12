import { ethers } from "ethers";
import { IEVM } from "./EVM";

export type makeContractType = (
  this: IEVM,
  address: string,
  contractInterface: ethers.ContractInterface
) => ethers.Contract;

export const makeContract: makeContractType = function (
  address,
  contractInterface
) {
  const Contract = ethers.Contract;
  const contract: ethers.Contract = new Contract(address, contractInterface);
  this.contracts.push(contract);
  return contract;
};
