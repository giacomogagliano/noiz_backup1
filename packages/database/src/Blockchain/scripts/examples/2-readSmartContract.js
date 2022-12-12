const { ethers } = require("ethers");
const { connection } = require("./lib/connection");
const fs = require("fs");

const file =
  "/Users/WAW/Documents/Projects/zion-contracts/scripts/examples/ABI/wMatic.json";
const raw = fs.readFileSync(file);
const ABI = JSON.parse(raw);

const provider = connection("polygon");
const address = "0x164e8dbE80776b53f702E169F3753BCAf1945Ad3";
const wMatic = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
const wMaticABI = ABI.result;

const contract = new ethers.Contract(wMatic, wMaticABI, provider);

async function main() {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const balanceOf = ethers.utils.formatEther(await contract.balanceOf(address));
  console.log("name: ", name);
  console.log("symbol: ", symbol);
  console.log("balance: ", balanceOf);
}

main();
