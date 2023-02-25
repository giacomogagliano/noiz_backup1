/**
 *
 */
export type MixinAny = (
  superclass: any
) => new (...arg: any[]) => any;

/**
 *
 */
export type Mixin = (
  superclass: ZionTypes.Class.Constructor,
  id: number
) => new (...arg: any[]) => {};

/**
 *
 */
export type MixinType1 = <T extends {}>(
  superclass: ZionTypes.Class.Constructor1<T>
) => new () => {};

/**
 *
 */
export type ComplexMixin_old<X> = <
  TBase extends new (...args: any[]) => {}
>(
  Base: TBase,
  id: number
) => {
  new (...arg: any[]): X;
} & TBase;

/**
 *
 */
export type ComplexMixin2<X> = <TBase>(
  Base: TBase extends ZionTypes.Class.Constructor
    ? TBase
    : never,
  id: number
) => {
  new (...arg: any[]): X;
} & TBase;

/**
 *
 */
export type GenericMixin<MixinType> = <
  Ctor extends Object
>(
  superclass: ZionTypes.Class.GCtor<Ctor>,
  id: number
) => new (...arg: any[]) => new (
  ...arg: any[]
) => MixinType & Ctor;

/**
 *
 */
export type MixinType = (
  superclass: ZionTypes.Class.Constructor,
  id: number
) => new (...arg: any[]) => {};

/**
 *
 */
export type MixinTypeNoArgs = <
  T extends new (...args: any[]) => {}
>(
  superclass: T
) => new () => {};

/**
 *
 */
export type mixin = <
  T extends { [key: string]: any },
  X extends any
>(
  a: GConstructor<T>
) => GConstructor<T & X>;

/**
 * Type which can describe any type of Mixin. A mixin is a
 * function which accepts a class as argument which will be
 * the parent of the class which is build in the mixin.
 */
export type AnyMixin = (
  ...args: any[]
) => new (...arg: any[]) => any;

/**
 * This is the last version of ComplexMixin type.
 */
export type ComplexMixin<
  IMix = new (...args: any[]) => {},
  MixCtor = GConstructor<IMix>,
  IBase = {},
  BaseCtor = GConstructor<IBase>,
  Ext = BaseCtor
> = (ctor: Ext) => MixCtor & Ext;

/**
 *
 */
export type InferMixinInstance<T> = T extends ComplexMixin<
  infer X
>
  ? X
  : false;

/**
 *
 */
export type IntersectionOfMixinArray<
  T extends ComplexMixin<any>[]
> = T extends ComplexMixin<infer X>[]
  ? (X extends any ? (k: X) => void : never) extends (
      k: infer I
    ) => void
    ? I
    : never
  : never;

/**
 * Abstract
 */
export type AbstractIntersectionOfMixinArray<
  T extends ComplexAbstractMixin<any>[]
> = T extends ComplexAbstractMixin<infer X>[]
  ? (X extends any ? (k: X) => void : never) extends (
      k: infer I
    ) => void
    ? I
    : never
  : never;
