export type AbiType =
  | "function"
  | "constructor"
  | "event"
  | "fallback";
export type StateMutabilityType =
  | "pure"
  | "view"
  | "nonpayable"
  | "payable";

export interface AbiItem<
  G extends string | number = string,
  T extends StateMutabilityType = StateMutabilityType
> {
  anonymous?: boolean;
  constant?: boolean;
  inputs?: AbiInput[];
  name?: string;
  outputs?: AbiOutput[];
  payable?: boolean;
  stateMutability?: T | string;
  type: AbiType | string;
  gas?: G;
}

export interface AbiInput {
  name: string;
  type: string;
  indexed?: boolean;
  components?: AbiInput[];
  internalType?: string;
}

export interface AbiOutput {
  name: string;
  type: string;
  components?: AbiOutput[];
  internalType?: string;
}
