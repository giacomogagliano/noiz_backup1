import { reduce } from "../reduce";

type withType = <
  ctor extends AnyCtor,
  T extends ComplexMixin<any>[]
>(
  ctor: ctor,
  mixins: T
) => new () => IntersectionOfMixinArray<T> &
  InferInstance<ctor>;

export const with_v1: withType = function <
  ctor extends AnyCtor,
  T extends ComplexMixin<any>[]
>(
  ctor: ctor,
  mixins: T
): new () => IntersectionOfMixinArray<T> &
  InferInstance<ctor> {
  let res: new () => IntersectionOfMixinArray<T> &
    InferInstance<ctor> = mixins.reduce(reduce, ctor);
  return res;
};
