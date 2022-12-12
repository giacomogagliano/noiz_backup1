export type reduceType = <ctor>(
  prev: any,
  curr: any
) => ctor;

export const reduce_v1: reduceType = <ctor>(
  prev: any,
  curr: any
) => {
  return class extends curr(prev) {} as ctor;
};
