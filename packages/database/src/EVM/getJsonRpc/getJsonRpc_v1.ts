import { ethers } from "ethers";

export type IgetJsonRpc_v1 =
  () => typeof ethers.providers.JsonRpcProvider;

export const getJsonRpc_v1: IgetJsonRpc_v1 = function () {
  return ethers.providers.JsonRpcProvider;
};
