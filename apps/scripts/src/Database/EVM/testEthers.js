import { EVM } from "@zionstate/database";
import {} from "@zionstate/database/EVM";
import { config } from "dotenv";
config();

const network = "homestead";
const matic = "matic";
const infura = process.env.INFURA;
const etherscan = process.env.ETHERSCAN;
const alchemyPolygon = process.env.ALCHEMY_POLYGON;
const block_scout = process.env.BLOCKSCOUT_GNOSIS_HTTPS;
const myAddress = "0x164e8dbE80776b53f702E169F3753BCAf1945Ad3";

const evm = new EVM.EVM({
  keys: { alchemy: alchemyPolygon, etherscan, infura },
  rpcs: { block_scout },
});

const gnoprice = await evm.getGasPrice("gnosis");
const myMaticBalance = await evm.getBalance(myAddress, "polygon");
const myGnosisBalance = await evm.getBalance(myAddress, "gnosis");
console.log(gnoprice);
console.log(myMaticBalance);
console.log(myGnosisBalance);
evm.deployContract();
// const provider = evm.getProvider("gnosis");

// console.log(await provider.getGasPrice());

// const ethers = evm.ethers;
// const formatEther = ethers.utils.formatEther;
// const formatUnits = ethers.utils.formatUnits;
// const defaultProvider = ethers.getDefaultProvider(network, {
//   infura,
//   etherscan,
// });
// const alchemy = new ethers.providers.AlchemyProvider(matic, alchemyPolygon);
// const gasPrice = await defaultProvider.getGasPrice();
// const gasPricePolygon = await alchemy.getGasPrice();
// const inEthers = formatEther(gasPrice);
// const inGwei = formatUnits(gasPrice, "gwei");
// const polygonGasInEthers = formatEther(gasPricePolygon);
// console.log("Gas Price on Ethereum " + inEthers);
// console.log("Gas Price on Polygon " + polygonGasInEthers);
