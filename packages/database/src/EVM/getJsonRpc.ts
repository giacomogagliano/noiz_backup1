import { ethers } from "ethers";

export type getJsonRpcType = () => typeof ethers.providers.JsonRpcProvider;

export const getJsonRpc: getJsonRpcType = function () {
  return ethers.providers.JsonRpcProvider;
};
