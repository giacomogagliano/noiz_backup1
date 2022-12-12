import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { zionUtils } from "./utils/test-utils";

function calculateTxCost(gasLimit: number, gasPrice: number | undefined) {
  if (!gasPrice) gasPrice = 0;
  return new Number(ethers.utils.formatEther(gasLimit * gasPrice)).valueOf();
}

describe("SimpleTest", () => {
  it("", async () => {
    const prova = await ethers.getContractFactory("IsStruct3");
    const instance = await prova.deploy();
    console.log(instance.deployTransaction.gasLimit.toString());
  });
});
