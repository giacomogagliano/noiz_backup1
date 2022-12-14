import { ethers, Signer } from "ethers";
import { HardhatContractJson } from "../../types/HardhatContractJson";

type ContractFactory = ethers.ContractFactory;

export interface INoizContractFactory_v1 {
  // HardhatContractJson
  abi: HardhatContractJson["abi"];
  byteCode: HardhatContractJson["bytecode"];
  contractName: HardhatContractJson["contractName"];
  deployedByteCode: HardhatContractJson["deployedBytecode"];
  deployedLinkReferences: HardhatContractJson["deployedLinkReferences"];
  sourceName: HardhatContractJson["sourceName"];
}

export interface NoizContractFactory_v1<
  CF extends ContractFactory
> {
  // HardhatContractJson
  abi: HardhatContractJson["abi"];
  byteCode: HardhatContractJson["bytecode"];
  contractName: HardhatContractJson["contractName"];
  deployedByteCode: HardhatContractJson["deployedBytecode"];
  deployedLinkReferences: HardhatContractJson["deployedLinkReferences"];
  sourceName: HardhatContractJson["sourceName"];
  //
  getContractFactory(signer: Signer): CF;
}

export class NoizContractFactory_v1<
  CF extends ContractFactory
> implements INoizContractFactory_v1
{
  #contract: HardhatContractJson;
  constructor(contract: HardhatContractJson) {
    this.#contract = contract;
    this.abi = this.#contract.abi;
    this.byteCode = this.#contract.bytecode;
    this.contractName = this.#contract.contractName;
    this.#contract.deployedBytecode;
    this.#contract.deployedLinkReferences;
    this.#contract.linkReferences;
    this.sourceName = this.#contract.sourceName;
  }
  getContractFactory = (signer: Signer) => {
    return new ethers.ContractFactory(
      this.abi,
      this.byteCode,
      signer
    ) as CF;
  };
}

export type NoizContractFactory_v1Ctor<
  CF extends ContractFactory = ContractFactory
> = {
  new (
    abi: HardhatContractJson
  ): NoizContractFactory_v1<CF>;
};

export const NoizContractFactory_v1Ctor: NoizContractFactory_v1Ctor =
  NoizContractFactory_v1;
