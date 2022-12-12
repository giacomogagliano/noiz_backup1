import { AbiItem } from "./Abi";

export interface HardhatContractJson {
  _format: string;
  contractName: string;
  sourceName: string;
  abi: AbiItem[];
  bytecode: string;
  deployedBytecode: string;
  linkReferences: {};
  deployedLinkReferences: {};
}
