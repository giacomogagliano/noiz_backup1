import { staticImplements as si } from "../../Decorators/staticImplements.js";

export interface IBase_v1 {
  name: string;
}

export interface Base_v1 {
  name: string;
}

export class Base_v1 implements IBase_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Base_v1Ctor = {
  new (name: string): Base_v1;
};

export const Base_v1Ctor: Base_v1Ctor = Base_v1;

const staticImplements = si;

interface IStaticBase {
  basi: IBase[];
  mostraBasi(): void;
}

export interface IBase {
  id: number;
  type: string;
}

export abstract class ABase implements IBase {
  static #basi: IBase[] = [];
  static get basi() {
    return ABase.#basi;
  }
  static mostraBasi() {
    console.table(ABase.basi);
  }
  id: number;
  constructor(public type: string = "nd") {
    ABase.#basi.push(this);
    this.id = ABase.basi.length;
  }
}

@staticImplements<IStaticBase>()
// @ts-ignore
export class Base extends ABase implements IBase {}
