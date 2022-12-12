import { ethers } from "ethers";
import { IEVM } from "./EVM";

export type retrieveTxDatasType = (
  this: IEVM,
  contract: ethers.Contract
) => ethers.ContractTransaction;

export const retrieveTxDatas: retrieveTxDatasType = function (contract) {
  return contract.deployTransaction;
};
