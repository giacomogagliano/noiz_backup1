export interface IArray_v1 {
  name: string;
}

export interface Array_v1 {
  name: string;
}

export class Array_v1 implements IArray_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Array_v1Ctor = {
  new (name: string): Array_v1;
};

export const Array_v1Ctor: Array_v1Ctor = Array_v1;
