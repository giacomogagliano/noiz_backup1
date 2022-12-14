import { BigNumber, ethers } from "ethers";
import { IEVM } from "../../EVM";

export type IformatEthers_v1 = (
  this: IEVM,
  bigNumber: BigNumber
) => string;

export const formatEthers_v1: IformatEthers_v1 = function (
  bigNumber
) {
  const inEthers = ethers.utils.formatEther(bigNumber);
  return inEthers;
};
