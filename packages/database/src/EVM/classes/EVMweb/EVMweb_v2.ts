import { ethers } from "ethers";
import {
  detect,
  MetaMaskEthereumProvider,
} from "../../lib";
import { ZionContractFactories } from "../../Types/ZionContractFactories";

// TODO move this in zionbase/somewhere
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

export interface IEVMweb_v2 {
  window: RequireOnlyOne<Window, "ethereum">;
  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  newContractFactories: typeof ZionContractFactories["prototype"]["newContractFactories"];
  newNoizContractFactories: typeof ZionContractFactories["prototype"]["newNoizContractFactories"];
  detect(): Promise<MetaMaskEthereumProvider | null>;
}

export interface EVMweb_v2 {
  window: RequireOnlyOne<Window, "ethereum">;
  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  newContractFactories: typeof ZionContractFactories["prototype"]["newContractFactories"];
  newNoizContractFactories: typeof ZionContractFactories["prototype"]["newNoizContractFactories"];
  detect(): Promise<MetaMaskEthereumProvider | null>;
}

export class EVMweb_v2 implements IEVMweb_v2 {
  window: RequireOnlyOne<Window, "ethereum">;
  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  newContractFactories: typeof ZionContractFactories["prototype"]["newContractFactories"];
  newNoizContractFactories: typeof ZionContractFactories["prototype"]["newNoizContractFactories"];
  constructor(args: EVMwebArgs) {
    this.window = args.window;
    this.provider = new ethers.providers.Web3Provider(
      this.window.ethereum
    );
    this.signer = this.provider.getSigner();
    const zionContractFactories =
      new ZionContractFactories(this.signer);
    this.newContractFactories =
      zionContractFactories.newContractFactories;
    this.newNoizContractFactories =
      zionContractFactories.newNoizContractFactories;
  }
  async detect() {
    return detect(this.window);
  }
}

export type EVMweb_v2Ctor = {
  new (args: EVMwebArgs): EVMweb_v2;
};

export const EVMweb_v2Ctor: EVMweb_v2Ctor = EVMweb_v2;

/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
