export type MakeBooleansFromEnum_v1<T> = {
  [props in keyof T]?: boolean;
};
