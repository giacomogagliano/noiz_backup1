import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "./tasks/index.ts";
import { config as dotenv } from "dotenv";
dotenv();

// const ALCHEMY_API_KEY = "KEY";
// const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";
// const ALCHEMY_DEMO_GOERLI = process.env.ALCHEMY_DEMO_GOERLI;
// const ALCHEMY_DEMO_GOERLI_HTTPS = process.env.ALCHEMY_DEMO_GOERLI_HTTPS;
const INFURA_GOERLI_URI = process.env.INFURA_GOERLI_URI;
let PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!PRIVATE_KEY) PRIVATE_KEY = "";
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: INFURA_GOERLI_URI,
      accounts: [PRIVATE_KEY],
    },
  },
  typechain: {
    outDir: "src/types/contracts",
  },
  paths: {
    sources: "./contracts/zion_contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
