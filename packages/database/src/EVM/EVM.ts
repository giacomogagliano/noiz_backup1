// import ethers from "ethers";
import {
  getProvider,
  getProviderType,
} from "./getProvider";
import {
  formatEther,
  formatEtherType,
} from "./formatEthers";
import {
  formatUnits,
  formatUnitsType,
} from "./formatUnits";
import { getBalance, getBalanceType } from "./getBalance";
import {
  getGasPrice,
  getGasPriceType,
} from "./getGasPrice";
import { getJsonRpc, getJsonRpcType } from "./getJsonRpc";
import {
  buildProviders,
  buildProvidersType,
} from "./buildProviders";
import { ethers, Signer } from "ethers";
import {
  makeContract,
  makeContractType,
} from "./getContract";
import {
  deployContract,
  deployContractType,
} from "./deployContract";
import {
  retrieveTxDatas,
  retrieveTxDatasType,
} from "./retrieveTxDatas";
import {
  calculateTxCosts,
  calculateTxCostsType,
} from "./calculateTxCosts";
// import { printTxLog, printTxLogType } from "./printTxLog";
import { ZionContractFactories } from "./Types/ZionContractFactories";
import {
  detectEthereumProvider,
  MetaMaskEthereumProvider,
} from "./detectEthereumProvider";
import { requestAccounts } from "./requestAccounts";
import {
  addContractFactory,
  addContractFactoryType,
} from "./addContractFactory";
import {
  AlchemyProvider,
  EtherscanProvider,
  InfuraProvider,
  JsonRpcProvider,
} from "./Types";
import { RequireOnlyOne } from "./EVMweb";

export type EVMCtorArgs = {
  signer?: Signer;
  keys: KeysRequired;
  rpcs: RpcRequired;
};

export type Providers = {
  ethereum: {
    etherscan: EtherscanProvider;
  };
  polygon: {
    alchemy: AlchemyProvider;
  };
  gnosis: {
    block_scout: JsonRpcProvider;
  };
  infura?: InfuraProvider;
};

export type Keys = {
  infura?: string;
  etherscan?: string;
  alchemy?: string;
};

export type RpcUrl = {
  block_scout: string;
};

type KeysRequired = RequireOnlyOne<Keys>;
type RpcRequired = RequireOnlyOne<RpcUrl>;

export interface IEVM {
  signer?: Signer;
  keys: KeysRequired;
  rpcs: RpcRequired;
  providers: Providers;
  contracts: ethers.Contract[];
  contractFactories?: typeof ZionContractFactories["prototype"]["contractFactories"];
  // buildProviders: buildProvidersType;
  addContractFactory: addContractFactoryType;
  calculateTxCosts: calculateTxCostsType;
  deployContract: deployContractType;
  // detectEthereumProvider: typeof detectEthereumProvider;
  formatEther: formatEtherType;
  formatUnits: formatUnitsType;
  getBalance: getBalanceType;
  getGasPrice: getGasPriceType;
  getProvider: getProviderType;
  getJsonRpc: getJsonRpcType;
  makeContract: makeContractType;
  // printTxLog: printTxLogType;
  retrieveTxDatas: retrieveTxDatasType;
  // requestAccounts: requestAccountsType;
}

declare global {
  export interface Window {
    ethereum?: MetaMaskEthereumProvider;
  }
}

export const EVM = class implements IEVM {
  static detectEthereumProvider = detectEthereumProvider;
  static requestAccounts = requestAccounts;
  static Web3Provider = ethers.providers.Web3Provider;
  signer?: Signer;
  keys: KeysRequired;
  rpcs: RpcRequired;
  providers: Providers;
  contracts: ethers.Contract[] = [];
  contractFactories?: typeof ZionContractFactories["prototype"]["contractFactories"];
  constructor(args: EVMCtorArgs) {
    this.signer = args.signer;
    this.keys = args.keys;
    this.rpcs = args.rpcs;
    this.providers = this.#buildProviders();
    try {
      this.contractFactories = new ZionContractFactories(
        this.signer
      ).contractFactories;
    } catch (error) {
      console.log("no signer");
    }
  }
  #buildProviders: buildProvidersType = buildProviders;
  addContractFactory = addContractFactory;
  calculateTxCosts = calculateTxCosts;
  deployContract = deployContract;
  // detectEthereumProvider = detectEthereumProvider;
  formatEther = formatEther;
  formatUnits = formatUnits;
  getBalance = getBalance;
  getGasPrice = getGasPrice;
  getJsonRpc = getJsonRpc;
  getProvider = getProvider;
  makeContract = makeContract;
  // printTxLog = printTxLog;
  retrieveTxDatas = retrieveTxDatas;
  requestAccounts = requestAccounts;
};
