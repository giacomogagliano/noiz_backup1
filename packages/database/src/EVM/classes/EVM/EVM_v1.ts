import { ethers, Signer } from "ethers";
import {
  addContractFactory,
  addContractFactoryType,
  buildProviders,
  buildProvidersType,
  calculateTxCosts,
  calculateTxCostsType,
  deployContract,
  deployContractType,
  detectEthereumProvider,
  formatEther,
  formatEtherType,
  formatUnits,
  formatUnitsType,
  getBalance,
  getBalanceType,
  getGasPrice,
  getGasPriceType,
  getJsonRpc,
  getJsonRpcType,
  getProvider,
  getProviderType,
  makeContract,
  makeContractType,
  MetaMaskEthereumProvider,
  requestAccounts,
  retrieveTxDatas,
  retrieveTxDatasType,
} from "../../lib";
import {
  AlchemyProvider,
  EtherscanProvider,
  InfuraProvider,
  JsonRpcProvider,
} from "../../Types";
import { ZionContractFactories } from "../../Types/ZionContractFactories";
import { RequireOnlyOne } from "../EVMweb";

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

export class EVM_v1 implements IEVM {
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
}
