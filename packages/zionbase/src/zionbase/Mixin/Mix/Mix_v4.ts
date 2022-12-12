import { reduce } from "./lib";

/**
 *
 */
export type withTypeInClass<ctor extends AnyCtor> = <
  T extends ComplexMixin<any>[]
>(
  mixins: T
) => new () => IntersectionOfMixinArray<T> &
  InferInstance<ctor>;

/////////////////////METHODS//////////////////////////////
/////////////////////GLOBAL///////////////////////////////

/**
 * TODO @
 */
export interface IMix_v4<ctor extends AnyCtor> {
  ctor: ctor;
  with: withTypeInClass<ctor>;
}

/////////////////////TYPES////////////////////////////////
/////////////////////CLASS////////////////////////////////

/**
 *
 */
export interface IMix_v4<ctor extends AnyCtor> {
  ctor: ctor;
  with: withTypeInClass<ctor>;
}

/**
 *
 */
export interface Mix_v4<ctor extends AnyCtor> {
  ctor: ctor;
}

/**
 * ```ts
 *
 * // Create the interface for the class which will be mixed
 * interface IGraphable {
 *   addNode: () => void;
 * }
 *
 * // Call the ComplexMixin generic and generate the type
 * type GraphableType = ComplexMixin<IGraphable>;
 *
 * // this is the actual Mixing class. The funciton shall be
 * // called with a suffix `able` and the returned class shall
 * // have the name of the class without the `able`
 * const Graphable: GraphableType = function (ctor) {
 *   return class Graph extends ctor implements IGraphable {
 *     addNode() {}
 *   };
 * };
 *
 * // Create the interface for the class which will be mixed
 * interface INodable {
 *   addChild: () => void;
 * }
 *
 * // Call the ComplexMixin generic and generate the type
 * type NodableType = ComplexMixin<INodable>;
 *
 * // this is the actual Mixing class. The funciton shall be
 * // called with a suffix `able` and the returned class shall
 * // have the name of the class without the `able`
 * const Nodable: NodableType = function Nodable(ctor) {
 *   return class Duck extends ctor implements INodable {
 *     addChild() {}
 *   };
 * };
 *
 * // Make an interface or get the interface of the class which
 * // shall be composed
 * interface FC {
 *   x: number;
 *   y: number;
 * }
 *
 * // In this example the class represents a React Component
 * class FC {
 *   render = 0;
 *   componentDidMount = { name: "" };
 * }
 *
 * // Mix the classes in this way:
 * class Abbb extends new Mix_v4(FC).with([
 *   Nodable,
 *   Graphable,
 * ]) {
 *   ciao = "";
 * }
 *
 * const dodod = new Abbb();
 * ```
 */
export class Mix_v4<ctor extends AnyCtor>
  implements IMix_v4<ctor>
{
  constructor(ctor: ctor) {
    this.ctor = ctor;
  }
  with<T extends ComplexMixin<any>[]>(
    mixins: T
  ): new () => IntersectionOfMixinArray<T> &
    InferInstance<ctor> {
    const ctor = this.ctor;
    let res: new () => IntersectionOfMixinArray<T> &
      InferInstance<ctor> = mixins.reduce(reduce, ctor);
    return res;
  }
}

/**
 *
 */
export type Mix_v4Ctor<ctor extends AnyCtor = AnyCtor> = {
  new (ctor: ctor): IMix_v4<ctor>;
};

/**
 *
 */
export const Mix_v4Ctor: Mix_v4Ctor = Mix_v4;
