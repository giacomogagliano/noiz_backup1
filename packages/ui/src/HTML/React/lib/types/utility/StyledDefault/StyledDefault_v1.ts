import { Flatten } from "../../../utility";

// export const StyledDefault_v1 = "StyledDefault_v1";

export type StyledDefault_v1<T> = Flatten<
  T & {
    css?: string;
    className?: string;
  }
>;
