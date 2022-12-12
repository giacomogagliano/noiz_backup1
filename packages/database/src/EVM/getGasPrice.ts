import { IEVM } from "./EVM";
import { NetworksTypes } from "./Types";

export type getGasPriceType = (
  this: IEVM,
  network: NetworksTypes
) => Promise<string>;

export const getGasPrice: getGasPriceType = async function (network) {
  const ethereum = this.providers.ethereum.etherscan;
  const gnosis = this.providers.gnosis.block_scout;
  const polygon = this.providers.polygon.alchemy;
  let gasPriceInWei;
  switch (network) {
    case "ethereum":
      gasPriceInWei = await ethereum.getGasPrice();
      break;
    case "gnosis":
      gasPriceInWei = await gnosis.getGasPrice();
      break;
    case "polygon":
      gasPriceInWei = await polygon.getGasPrice();
      break;
    default:
      gasPriceInWei = await ethereum.getGasPrice();
      break;
  }
  return this.formatEther(gasPriceInWei);
};
