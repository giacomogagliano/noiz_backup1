import { ethers } from "ethers";
import { detect } from "./detect";
import { MetaMaskEthereumProvider } from "./detectEthereumProvider";
import { ZionContractFactories } from "./Types/ZionContractFactories";

export type RequireOnlyOne<
  T,
  Keys extends keyof T = keyof T
> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type EVMwebArgs = {
  window: RequireOnlyOne<Window, "ethereum">;
};

export interface IEVMweb {
  window: RequireOnlyOne<Window, "ethereum">;
  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  contractFactories: typeof ZionContractFactories["prototype"]["contractFactories"];
  detect(): Promise<MetaMaskEthereumProvider | null>;
}

export interface EVMweb {
  window: RequireOnlyOne<Window, "ethereum">;
  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  contractFactories: typeof ZionContractFactories["prototype"]["contractFactories"];
  detect(): Promise<MetaMaskEthereumProvider | null>;
}

export class EVMweb implements IEVMweb {
  window: RequireOnlyOne<Window, "ethereum">;
  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  contractFactories: typeof ZionContractFactories["prototype"]["contractFactories"];
  constructor(args: EVMwebArgs) {
    this.window = args.window;
    this.provider = new ethers.providers.Web3Provider(
      this.window.ethereum
    );
    this.signer = this.provider.getSigner();
    this.contractFactories = new ZionContractFactories(
      this.signer
    ).contractFactories;
  }
  async detect() {
    return detect(this.window);
  }
}
