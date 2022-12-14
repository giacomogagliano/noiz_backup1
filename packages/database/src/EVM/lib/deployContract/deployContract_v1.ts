import { ethers } from "ethers";
import { IEVM } from "../../EVM";

export type IdeployContract_v1 = <
  C extends ethers.Contract
>(
  this: IEVM,
  contractFactory: ethers.ContractFactory,
  contractArgs: any[]
) => Promise<C>;

export const deployContract_v1: IdeployContract_v1 =
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
