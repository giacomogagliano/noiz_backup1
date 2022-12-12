export {};

declare global {
  export namespace ZionTypes {
    export namespace Middlewares {
      export type Middleware<T> = (curr: T) => void;
    }
  }
}
