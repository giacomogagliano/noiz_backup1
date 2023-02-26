export interface ILeafNode_v2 {
  name: string;
}

export interface LeafNode_v2 {
  name: string;
}

export class LeafNode_v2 implements ILeafNode_v2 {
  constructor(name: string) {
    this.name = name;
  }
}

export type LeafNode_v2Ctor = {
  new (name: string): LeafNode_v2;
};

export const LeafNode_v2Ctor: LeafNode_v2Ctor =
  LeafNode_v2;
