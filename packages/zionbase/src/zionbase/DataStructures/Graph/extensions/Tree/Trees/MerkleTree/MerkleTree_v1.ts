export interface IMerkleTree_v1 {
  name: string;
}

export interface MerkleTree_v1 {
  name: string;
}

export class MerkleTree_v1 implements IMerkleTree_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type MerkleTree_v1Ctor = {
  new (name: string): MerkleTree_v1;
};

export const MerkleTree_v1Ctor: MerkleTree_v1Ctor =
  MerkleTree_v1;
