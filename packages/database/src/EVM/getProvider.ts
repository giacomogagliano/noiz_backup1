import { ethers } from "ethers";
import { IEVM } from "./EVM";
import {
  AlchemyProvider,
  EtherscanProvider,
  JsonRpcProvider,
  NetworksTypes,
} from "./Types";

export interface getProviderType {
  (this: IEVM, network: "polygon"): AlchemyProvider;
  (this: IEVM, network: "ethereum"): EtherscanProvider;
  (this: IEVM, network: "gnosis"): JsonRpcProvider;
  (this: IEVM, network: NetworksTypes): EtherscanProvider;
}

export const getProvider: getProviderType = function (network): any {
  const providers = ethers.providers;
  const BaseProvider = providers.BaseProvider;
  if (network === "ethereum") return this.providers.ethereum;
  if (network === "polygon") return this.providers.polygon;
  if (network === "gnosis") return this.providers.gnosis;
  return new BaseProvider(network);
};
