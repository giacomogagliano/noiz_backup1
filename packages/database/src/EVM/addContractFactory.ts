import { ethers } from "ethers";
import { IEVM } from "./EVM";
import { getContractFactory } from "./getContractFactory";

export interface addContractFactoryType {
  (
    this: IEVM,
    name: string,
    contractFactory: ethers.ContractFactory
  ): Promise<IEVM>;
}

export const addContractFactory: addContractFactoryType = async function (
  name,
  contractFactory
) {
  const factory = await getContractFactory(
    contractFactory.interface,
    contractFactory.bytecode,
    contractFactory.signer
  );
  if (!this.contractFactories) throw new Error("no contract factories");
  this.contractFactories[name] = factory;
  return this;
};
