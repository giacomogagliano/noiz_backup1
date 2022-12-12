/**
 * This type describes the mix_v1 function.
 */
export type mix_v1Type = <
  ctor1 extends new () => {},
  ctor2 extends ComplexMixin<any>
>(
  a: ctor1,
  b: ctor2
) => new () => InferInstance<ctor1> &
  InferMixinInstance<ctor2>;

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
 * class Ooo extends Mix(Mix(FC, Nodable), Graphable) {
 *   next: "0";
 * }
 * const bla = new Ooo().addNode;
 * ```
 * @param a
 * @param b
 * @returns
 */
export const mix_v1: mix_v1Type = function Mix<
  ctor extends new () => {},
  mixin extends ComplexMixin<any>
>(
  a: ctor,
  b: mixin
): new () => InferInstance<ctor> &
  InferMixinInstance<mixin> {
  return b(a) as new () => InferInstance<ctor> &
    InferMixinInstance<mixin>;
};
