export {};

declare global {
  export namespace ZionTypes {
    export namespace Class {
      /**
       * Questo type dovrebbe poter dare la possibilità di creare
       * una classe usando un Type generico e definendone i
       * dettagli al momento della dichiarazione
       * Usage:
       * ```ts
       * const Blooo: ClassType<{ a: string, b:string, c:number },string|number> = class NewClass {
       *  a: string = "";
       *  b: string = '';
       *  c: number = 0
       *  constructor(a: string,c:number) {
       *    this.a = a;
       *    this.c = c
       *  }
       * };
       * ```
       */
      export type GClassType<X, T = number> = new (
        ...args: (T extends ConstructorParameters<infer Params>
          ? Params extends string | number
            ? Params
            : never
          : T)[]
      ) => X extends infer Type ? Type : never;
    }
  }
}
