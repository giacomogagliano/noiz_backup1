// source https://www.typescriptlang.org/docs/handbook/mixins.html

/**
 * Constructor type from the typescripylang.org site
 */
export type Constructor = new (...args: any[]) => {};

/**
 * Generic constructor
 * @param T represents the type returned by the class constructor
 */
export type GConstructor<T = {}> = new (
  ...args: any[]
) => T;

/**
 * Interface of the class
 */
export interface IPattern1_v1 {
  name: string;
}

/**
 * Pattern 1
 * @param ctor the class to be extended
 * @returns
 */
export function Pattern1_v1Able(ctor: GConstructor<{}>) {
  interface Pattern1_v1 {
    name: string;
  }
  class Pattern1_v1 extends ctor implements IPattern1_v1 {
    constructor(name: string) {
      super();
      this.name = name;
    }
  }
  return Pattern1_v1;
}

export type Pattern1_v1Ctor = (ctor: GConstructor<{}>) => {
  new (name: string): IPattern1_v1;
};

export const Pattern1_v1Ctor: Pattern1_v1Ctor =
  Pattern1_v1Able;
