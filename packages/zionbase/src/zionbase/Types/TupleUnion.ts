export type TupleUnion<
  U extends string,
  R extends any[] = []
> = {
  [S in U]: Exclude<U, S> extends never
    ? [...R, S]
    : TupleUnion<Exclude<U, S>, [...R, S]>;
}[U];

interface Person {
  firstName: string;
  lastName: string;
  dob: Date;
  hasCats: false;
}

export type keys = TupleUnion<keyof Person>;
