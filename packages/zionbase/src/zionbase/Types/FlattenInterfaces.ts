// import * as Constructors from "../Class/Constructors.js";
// import * as Mixins from "../Mixin/Mixins.js";

import { Mixin } from "./Mixin";

export {};
declare global {
  export namespace ZionTypes {
    /**
     * Example
     * ```
     * interface IdLabel {
     *   id: number ;
     *   bloo: boolean;
     * }
     *
     * type IdLabelType = FlattenInterface<IdLabel>;
     * ```
     * expected output:
     * ```
     * type IdLabelType = {
     *     id: number;
     *     bloo: boolean;
     * }
     * ```
     */
    export type FlattenInterface<Type> = {
      [Property in keyof Type]: Type[Property];
    };

    export type InterfaceOfClass<T> = FlattenInterface<
      InstanceType<T extends ZionTypes.Class.Constructor ? T : never>
    >;

    export type InterfaceOfMixin<T> = FlattenInterface<
      InstanceType<ReturnType<T extends Mixin ? T : never>>
    >;

    export type InterfaceOfBoth<MixinType, Superclass> = InterfaceOfMixin<
      MixinType extends Mixin ? MixinType : never
    > &
      InterfaceOfClass<
        Superclass extends ZionTypes.Class.Constructor ? Superclass : never
      >;

    export type ConstrOfInterfaceOfBoth<MixinType, Superclass> =
      ZionTypes.Class.GCtor<
        InterfaceOfBoth<
          MixinType extends Mixin ? MixinType : never,
          Superclass extends ZionTypes.Class.Constructor ? Superclass : never
        >
      >;
  }
}
