import { ethers } from "ethers";
import { IEVM } from "./EVM";

export type deployContractType = <
  C extends ethers.Contract
>(
  this: IEVM,
  contractFactory: ethers.ContractFactory,
  contractArgs: any[]
) => Promise<C>;

export const deployContract: deployContractType =
  async function <C extends ethers.Contract>(
    this: IEVM,
    contractFactory: ethers.ContractFactory,
    contractArgs: any[]
  ): Promise<C> {
    const instance = (await contractFactory.deploy(
      contractArgs
    )) as C;
    this.contracts.push(instance);
    return instance;
  };
