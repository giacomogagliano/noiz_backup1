export {};
declare global {
  export namespace ZionTypes {
    export type Flatten<T> = T extends any[] ? T[number] : T;
    export type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;
  }
}
