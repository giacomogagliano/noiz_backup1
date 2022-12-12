import { BigNumber, ethers } from "ethers";
import { IEVM } from "./EVM";

export type formatEtherType = (this: IEVM, bigNumber: BigNumber) => string;

export const formatEther: formatEtherType = function (bigNumber) {
  const inEthers = ethers.utils.formatEther(bigNumber);
  return inEthers;
};
