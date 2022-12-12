export {};

declare global {
  export namespace ZionTypes {
    export namespace Class {
      /**
       *
       * example
       * ```
       * interface Person {
       *   name: string;
       *   age: number;
       *   location: string;
       * } *
       * type LazyPerson = Getters<Person>;
       * ```
       * expected output:
       * ```
       * type LazyPerson = {
       *     getName: () => string;
       *     getAge: () => number;
       *     getLocation: () => string;
       * }
       * ```
       */
      export type Getters<Type> = {
        [Property in keyof Type as `get${Capitalize<
          string & Property
        >}`]: () => Type[Property];
      };
    }
  }
}
