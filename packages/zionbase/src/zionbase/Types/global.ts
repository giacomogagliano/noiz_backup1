import {
  Constructor as C,
  GConstructor as GC,
  GAbstractConstructor as GAC,
  AnyCtor_v1 as AC,
  AnyAbstractCtor_v1 as AAC,
  ComplexMixin as CM,
  InferInstance as II,
  InferAbstractInstance as IAI,
  InferMixinInstance as IMI,
  IntersectionOfMixinArray as IMIA,
  AbstractIntersectionOfMixinArray as AIMIA,
} from ".";

declare global {
  /**
   * Basic constructor which instance is an empty object
   */
  export type Constructor = C;

  type GConstructor<T> = GC<T>;

  /**
   * Abstract
   */
  type GAbstractConstructor<T> = GAC<T>;

  /**
   * Type which can describe any class. It can be used as
   * type for inputs which expect a constructor.
   */
  type AnyCtor = AC;

  /**
   * Type which can describe any class. It can be used as
   * type for inputs which expect a constructor.
   */
  type AnyAbstractCtor = AAC;

  /**
   * This is the last version of ComplexMixin type.
   */
  type ComplexMixin<
    IMix = new (...args: any[]) => {},
    MixCtor = GConstructor<IMix>,
    IBase = {},
    BaseCtor = GConstructor<IBase>,
    Ext = BaseCtor
  > = CM<IMix, MixCtor, IBase, BaseCtor, Ext>;

  /**
   * This is the last version of ComplexMixin type.
   */
  type ComplexAbstractMixin<
    IMix = new (...args: any[]) => {},
    MixCtor = GAbstractConstructor<IMix>,
    IBase = {},
    BaseCtor = GAbstractConstructor<IBase>,
    Ext = BaseCtor
  > = CM<IMix, MixCtor, IBase, BaseCtor, Ext>;

  /**
   * Infers the instance of a class constructor
   */
  type InferInstance<T extends new (...args: any) => any> =
    II<T>;

  /**
   * Infers the instance of an asbtract class constructor
   */
  type InferAbstractInstance<
    T extends abstract new (...args: any) => any
  > = IAI<T>;

  /**
   *
   */
  type InferMixinInstance<T> = IMI<T>;

  type IntersectionOfMixinArray<
    T extends ComplexMixin<any>[]
  > = IMIA<T>;

  /**
   * Intersection of abstract ctors
   */
  type AbstractIntersectionOfMixinArray<
    T extends ComplexAbstractMixin<any>[]
  > = AIMIA<T>;
}
