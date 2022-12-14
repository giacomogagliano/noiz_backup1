import { ethers } from "ethers";
import contract from "../../../Blockchain/src/Factories/SimpleStorage.sol/SimpleStorage.json";
import { HardhatContractJson } from "../../Types/HardhatContractJson";

type ContractFactory = ethers.ContractFactory;

const dd: HardhatContractJson = contract;

export interface INoizContractFactory_v1 {
  sourceName: HardhatContractJson["sourceName"];
  abi: HardhatContractJson["abi"];
  byteCode: HardhatContractJson["bytecode"];
}

export interface NoizContractFactory_v1 {
  sourceName: HardhatContractJson["sourceName"];
  abi: HardhatContractJson["abi"];
  byteCode: HardhatContractJson["bytecode"];
  factory: ContractFactory;
}

export class NoizContractFactory_v1
  implements INoizContractFactory_v1
{
  #contract: HardhatContractJson;
  constructor(contract: HardhatContractJson) {
    this.#contract = contract;
    this.abi = this.#contract.abi;
  }
}

export type NoizContractFactory_v1Ctor = {
  new (abi: HardhatContractJson): NoizContractFactory_v1;
};

export const NoizContractFactory_v1Ctor: NoizContractFactory_v1Ctor =
  NoizContractFactory_v1;

const contractFactory = new NoizContractFactory_v1(
  contract
);
