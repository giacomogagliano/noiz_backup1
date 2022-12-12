import { ethers } from "ethers";
import { IEVM } from "../../";
import {
  AlchemyProvider,
  EtherscanProvider,
  JsonRpcProvider,
  NetworksTypes,
} from "../../Types";

export interface IgetProvider_v1 {
  (this: IEVM, network: "polygon"): AlchemyProvider;
  (this: IEVM, network: "ethereum"): EtherscanProvider;
  (this: IEVM, network: "gnosis"): JsonRpcProvider;
  (this: IEVM, network: NetworksTypes): EtherscanProvider;
}

export const getProvider_v1: IgetProvider_v1 = function (
  network
): any {
  const providers = ethers.providers;
  const BaseProvider = providers.BaseProvider;
  if (network === "ethereum")
    return this.providers.ethereum;
  if (network === "polygon") return this.providers.polygon;
  if (network === "gnosis") return this.providers.gnosis;
  return new BaseProvider(network);
};
