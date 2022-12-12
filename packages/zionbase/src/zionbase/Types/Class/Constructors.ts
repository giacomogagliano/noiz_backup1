export {};
declare global {
  export namespace ZionTypes {
    export namespace Class {
      export type Constructor1<T> = new () => T;
      export type Constructor = new (...args: any[]) => {};
      /**
       * Allows creation of classe which only work with costrained
       * classe.
       *
       * Usage
       * ```
       * type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
       * type Spritable = GConstructor<Sprite>;
       * type Loggable = GConstructor<{ print: () => void }>;
       * function Jumpable<TBase extends Positionable>(Base: TBase) {
       *   return class Jumpable extends Base {
       *     jump() {
       *       // This mixin will only work if it is passed a base
       *       // class which has setPos defined because of the
       *       // Positionable constraint.
       *       this.setPos(0, 20);
       *     }
       *   };
       * }
       * ```
       */
      export type GCtor<T> = new (...args: any[]) => T;
      export type GCtor2<T> = new (...args: any[]) => T extends Object
        ? T
        : never;
      export type GCtor3<A, O> = new (args: A) => O;
    }
  }
}
