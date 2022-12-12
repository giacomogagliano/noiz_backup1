import pkg from "hardhat";
const ethers = pkg.ethers;

const CONTRACT = "IsStruct3";

const argv = process.argv[2];

async function main() {
  const prova = await ethers.getContractFactory(CONTRACT);
  const instance = await prova.deploy();
  const txGasLimit = instance.deployTransaction.gasLimit.toString();
  console.log("Deloy transaction GasLimit", txGasLimit);
  console.log("argv", argv);
}

main().catch((e) => console.log(e));
