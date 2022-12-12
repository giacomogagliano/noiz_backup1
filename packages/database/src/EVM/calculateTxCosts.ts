import { ethers } from "ethers";
import { IEVM } from "./EVM";

export type calculateTxCostsType = (
  this: IEVM,
  transaction: ethers.Transaction | ethers.ContractTransaction
) => number;

export const calculateTxCosts: calculateTxCostsType = function (transaction) {
  const gasPriceBigNumber = transaction.gasPrice;
  const gasLimitBigNumber = transaction.gasLimit;
  if (!gasPriceBigNumber) throw new Error("no gasPrice in tx details");
  const gasPrice = new Number(
    ethers.utils.formatEther(gasPriceBigNumber)
  ).valueOf();
  const gasLimit = new Number(
    ethers.utils.formatEther(gasLimitBigNumber)
  ).valueOf();
  return gasPrice * gasLimit;
};
