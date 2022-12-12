const { config } = require("dotenv");
const { ethers } = require("ethers");
const { connection } = require("./lib/connection");
config();

const provider = connection("xdai");
const address = "0x164e8dbE80776b53f702E169F3753BCAf1945Ad3";

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(ethers.utils.formatEther(balance));
};

main();
