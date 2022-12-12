export interface IBase_v2 {
  name: string;
}

export interface Base_v2 {
  name: string;
}

export interface Base_v2Props {}

export class Base_v2 implements IBase_v2 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Base_v2Ctor = {
  new (name: string): Base_v2;
};

export const Base_v2Ctor: Base_v2Ctor = Base_v2;
