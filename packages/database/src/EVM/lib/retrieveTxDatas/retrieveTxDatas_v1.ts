import { ethers } from "ethers";
import { IEVM } from "../../";

export type IretrieveTxDatas_v1 = (
  this: IEVM,
  contract: ethers.Contract
) => ethers.ContractTransaction;

export const retrieveTxDatas_v1: IretrieveTxDatas_v1 =
  function (contract) {
    return contract.deployTransaction;
  };
