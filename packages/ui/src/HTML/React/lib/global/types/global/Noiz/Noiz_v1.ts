import { PropsWithChildren } from "react";
import { Flatten } from "../../../utility";
import { StyledDefault } from "../../utility/StyledDefault/";

/**
 * Adds StyledDefault {css:.., className:...}
 * If the second generic argument is `true`, it also returns
 * a `children` member.
 */
export type NoizProps<
  T = any,
  C extends boolean = false
> = C extends false
  ? StyledDefault<T>
  : Flatten<PropsWithChildren<StyledDefault<T>>>;

/**
 * Standard React Component (class or function) props.
 *
 * usage:
 *
 * ```ts
 * type Data = {name:string}
 *
 * type Booleans = {
 *   small?: boolean;
 *   exortic?: boolean;
 * }
 *
 * type ElementProps = NoizDatas<
 *   Data,
 *   Booleans
 * >
 * ```
 *
 * This code renders a type which looks like this:
 * ```ts
 *
 * type Result = {
 *   datas: {name: string}[],
 *   small?: boolean;
 *   exortic?: boolean;
 *   css?: string;
 *   className?: string;
 * }
 * ```
 */
export type NoizDatas_v1<Data, Boolean> = NoizProps<
  Flatten<
    {
      datas: (Data extends {}
        ? { [k in keyof Data]: Data[k] }
        : never)[];
      // type?: Boolean;
    } & Boolean
  >,
  true
>;
export type NoizDatas_v2<
  Data,
  Boolean = {},
  Children = unknown
> = Flatten<
  {
    datas: (Data extends {}
      ? { [k in keyof Data]: Data[k] }
      : never)[];
    // type?: Boolean;
  } & Boolean &
    Children
>;
export type NoizDatas_v3<Data> = Flatten<{
  datas: (Data extends {}
    ? { [k in keyof Data]: Data[k] }
    : never)[];
  // type?: Boolean;
}>;

// export type MakeAsChild_v1<
//   DataId extends string,
//   Props extends { datas: any },
//   Children extends keyof Props = "datas",
//   Datas extends keyof Props = "datas",
//   AsChildProps extends {
//     [props in Children | Datas]: Props[props];
//   } = {
//     [props in Children | Datas]: Props[props];
//   }
// > = {
//   [k in DataId]: AsChildProps;
// };

export type MakeAsChild<
  DataId extends string,
  Datas extends { datas: any }
> = { [k in DataId]: { datas: Datas["datas"] } };
