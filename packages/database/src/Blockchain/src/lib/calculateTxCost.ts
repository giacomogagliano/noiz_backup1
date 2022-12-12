import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";
export {};
export function calculateTxCost(
  gasLimit: number,
  gasPrice: number | undefined
) {
  if (!gasPrice) gasPrice = 0;
  return new Number(ethers.utils.formatEther(gasLimit * gasPrice)).valueOf();
}
