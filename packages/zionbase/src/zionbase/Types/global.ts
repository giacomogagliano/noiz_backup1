import {
  Constructor as C,
  GConstructor as GC,
  AnyCtor_v1 as AC,
  ComplexMixin as CM,
  InferInstance as II,
  InferMixinInstance as IMI,
  IntersectionOfMixinArray as IMIA,
} from ".";

declare global {
  /**
   * Basic constructor which instance is an empty object
   */
  export type Constructor = C;

  type GConstructor<T> = GC<T>;

  /**
   * Type which can describe any class. It can be used as
   * type for inputs which expect a constructor.
   */
  type AnyCtor = AC;

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
   *
   */
  type InferInstance<T extends new (...args: any) => any> =
    II<T>;

  /**
   *
   */
  type InferMixinInstance<T> = IMI<T>;

  type IntersectionOfMixinArray<
    T extends ComplexMixin<any>[]
  > = IMIA<T>;
}
