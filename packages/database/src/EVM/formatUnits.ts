import { BigNumber, ethers } from "ethers";
import { IEVM } from "./EVM";

export type formatUnitsType = (
  this: IEVM,
  value: BigNumber,
  unitName?: ethers.BigNumberish
) => string;

export const formatUnits: formatUnitsType = function (value, unitName?) {
  const formatUnits = ethers.utils.formatUnits;
  let converted;
  if (unitName) converted = formatUnits(value, unitName);
  else converted = formatUnits(value);
  return converted;
};
