import { ethers } from "ethers";
import { IEVM } from "../../";
import { Networks } from "../../Types";

type EtherscanProvider =
  ethers.providers.EtherscanProvider;
type JsonRpcProvider = ethers.providers.JsonRpcProvider;
type AlchemyProvider = ethers.providers.AlchemyProvider;

export type IbuildProviders_v1 = (this: IEVM) => {
  ethereum: {
    etherscan: EtherscanProvider;
  };
  gnosis: {
    block_scout: JsonRpcProvider;
  };
  polygon: {
    alchemy: AlchemyProvider;
  };
};

export const buildProviders_v1: IbuildProviders_v1 =
  function (this) {
    const providers = ethers.providers;
    const EtherscanProvider = providers.EtherscanProvider;
    const JsonRpcProvider = providers.JsonRpcProvider;
    const AlchemyProvider = providers.AlchemyProvider;
    const etherscan = new EtherscanProvider(
      Networks.ethereum,
      this.keys.etherscan
    );
    const alchemy = new AlchemyProvider(
      Networks.polygon,
      this.keys.alchemy
    );
    const block_scout = new JsonRpcProvider(
      this.rpcs.block_scout,
      {
        chainId: 100,
        name: Networks.gnosis,
      }
    );
    return {
      ethereum: {
        etherscan,
      },
      gnosis: {
        block_scout,
      },
      polygon: {
        alchemy,
      },
    };
  };
