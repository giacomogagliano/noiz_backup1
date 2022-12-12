export {};

export namespace zionTypes {
  /**
   * Type presentato sul sito TSLang, serve per appiattire i
   * tipi contenuti in un array.
   */
  // export type Flatten<T> = T extends any[] ? T[number] : T;
  // /**
  //  * Costruttore di classe generico
  //  */
  // export namespace Constructor {
  //   export type Constructor1<T> = new () => T;
  //   export type Constructor = new (...args: any[]) => {};
  //   export type GCtor<T> = new (...args: any[]) => T;
  //   export type GCtor2 = new <T>(...args: any[]) => T;
  // }
  // export namespace Mixin {
  //   export type MixinAny = (superclass: any) => new (...arg: any[]) => any;
  //   export type Mixin = (
  //     superclass: Constructors.Constructor,
  //     id: number
  //   ) => new (...arg: any[]) => {};
  //   export type MixinType1 = <T extends {}>(
  //     superclass: Constructors.Constructor1<T>
  //   ) => new () => {};
  //   export type ComplexMixin<X> = <TBase extends Constructors.Constructor>(
  //     Base: TBase,
  //     id: number
  //   ) => {
  //     new (...arg: any[]): X;
  //   } & TBase;
  //   export type GenericMixin<MixinType> = <Ctor extends Object>(
  //     superclass: Constructors.GCtor<Ctor>,
  //     id: number
  //   ) => new (...arg: any[]) => new (...arg: any[]) => MixinType & Ctor;
  //   export type MixinType = (
  //     superclass: Constructors.Constructor,
  //     id: number
  //   ) => new (...arg: any[]) => {};
  // }
  // export type Mixin = (superclass: Constructor, id: number) => new (...arg: any[]) => {};
  //   /**
  //  *
  //  * example
  // ```
  // interface Person {
  //   name: string;
  //   age: number;
  //   location: string;
  // }
  // type LazyPerson = Getters<Person>;
  // ```
  //  * expected output:
  // ```
  // type LazyPerson = {
  //     getName: () => string;
  //     getAge: () => number;
  //     getLocation: () => string;
  // }
  // ```
  //  */
  //   export type Getters<Type> = {
  //     [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
  // //   };
  //   /**
  //  * Example
  // ```
  // interface IdLabel {
  //   id: number ;
  //   bloo: boolean;
  // }
  // type IdLabelType = FlattenInterface<IdLabel>;
  // ```
  // expected output:
  // ```
  // type IdLabelType = {
  //     id: number;
  //     bloo: boolean;
  // }
  // ```
  //  */
  //   export type FlattenInterface<Type> = {
  //     [Property in keyof Type]: Type[Property];
  //   };
  //   export type InterfaceOfClass<T> = FlattenInterface<
  //     InstanceType<T extends Constructors.Constructor ? T : never>
  //   >;
  //   export type InterfaceOfMixin<T> = FlattenInterface<
  //     InstanceType<ReturnType<T extends mixinsnamespace.Mixin ? T : never>>
  //   >;
  //   export type InterfaceOfBoth<MixinType, Superclass> = InterfaceOfMixin<
  //     MixinType extends mixinsnamespace.Mixin ? MixinType : never
  //   > &
  //     InterfaceOfClass<Superclass extends Constructors.Constructor ? Superclass : never>;
  //   export type ConstrOfInterfaceOfBoth<
  //     MixinType extends mixinsnamespace.Mixin,
  //     Superclass extends Constructors.Constructor
  //   > = Constructors.GCtor<InterfaceOfBoth<MixinType, Superclass>>;
  /**
   * Usage
   * ```
   * const arr2 = [{ a: 0 }, { b: true }, { c: { d: 0 } }]
   *
   * type InterOfArr = IntersctionOfObjectInArray<typeof arr2>
   * ```
   * expexcted output:
   * ```
   * type InterOfArr = {
   *     a?: number | undefined;
   *     b?: boolean | undefined;
   *     c?: {
   *         d: number;
   *     } | undefined;
   * }
   * ```
   */
  // export type IntersectionOfObjectInArray<T> = T extends Array<any>
  //   ? T extends Object
  //     ? { [Prop in keyof T[number]]: T[number][Prop] }
  //     : never
  //   : never;
  //////// MIXINS ////////
  // export type MixinDecoratorTypeAny = (mixin: any) => any;
  // export type MixinDecoratorTypeMixinAny = (mixin: mixinsnamespace.MixinAny) => {};
}
