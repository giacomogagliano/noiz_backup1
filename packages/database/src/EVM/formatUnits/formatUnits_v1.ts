import { BigNumber, ethers } from "ethers";
import { IEVM } from "../EVM";

export type IformatUnits_v1 = (
  this: IEVM,
  value: BigNumber,
  unitName?: ethers.BigNumberish
) => string;

export const formatUnits_v1: IformatUnits_v1 = function (
  value,
  unitName?
) {
  const formatUnits = ethers.utils.formatUnits;
  let converted: string;
  if (unitName) converted = formatUnits(value, unitName);
  else converted = formatUnits(value);
  return converted;
};
