import { ethers } from "ethers";
import { IEVM } from "../../";

export type IgetContract_v1 = (
  this: IEVM,
  address: string,
  contractInterface: ethers.ContractInterface
) => ethers.Contract;

export const getContract_v1: IgetContract_v1 = function (
  address,
  contractInterface
) {
  const Contract = ethers.Contract;
  const contract: ethers.Contract = new Contract(
    address,
    contractInterface
  );
  this.contracts.push(contract);
  return contract;
};
