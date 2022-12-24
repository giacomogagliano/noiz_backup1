export type MakeBooleansFromUnion_v1<T extends string> = {
  [props in T]?: boolean;
};
