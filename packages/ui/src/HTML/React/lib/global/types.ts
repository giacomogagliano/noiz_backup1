// TODO #21 @giacomogagliano sistemare global.ts in React/lib
import {
  AllHTMLAttributes as allHTML,
  // FC,
  // FunctionComponent as fc,
  FunctionComponentElement as fce,
  // FunctionComponentFactory,
  PropsWithChildren,
} from "react";
import {
  // DefaultTheme ,
  CSSProperties,
  // CSSProp,
  // CSSObject
} from "styled-components";
import { BooleanizeUnions } from "../utility";

export {};
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// HTML

// type datas = { name: string } | { surname: string };

// type Test<T> = {
//   datas: (T extends {}
//     ? { [k in keyof T]: T[k] }
//     : never)[];
//   tall?: boolean;
// };
// type ResTest = Test<datas>;

export type _AllHTMLAttributes<T> = allHTML<T>;

export type InputValue =
  | string
  | number
  | readonly string[]
  | undefined;

export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// REACT

export type BasicComponentProps<P> = PropsWithChildren<P>;
export type FunctionComponentElement<P> = fce<P>;
// type _FunctionComponent<P = {}> = fc<P>;
// type _BasicFC<P> = FC<BasicComponentProps<P>>;
// type _BasicFCFactory<P> = FunctionComponentFactory<P>;

// type FlattenInterface<Type> = {
//   [Property in keyof Type]: Type[Property];
// };

// type obj = CSSObject;
// type _FlattenedCSSObject = FlattenInterface<CSSObject>;

// type CssPropWithDefaultTheme = CSSProp<DefaultTheme>;

/// TEST JSX instrinsic
// type _FlattenedInstrinsicAttributes =
//   FlattenInterface<JSX.IntrinsicAttributes>;

/**
 * Props with JSX Instrinsic Attributes
 */
export type _PropsWithJsxInstrinsicAttr<T> =
  JSX.IntrinsicAttributes & T;

// /**
//  * Adds StyledDefault {css:.., className:...}
//  */
// type _NoizProps<
//   T = any,
//   hasChildren extends boolean = false
// > = hasChildren extends false
//   ? _StyledDefault<T>
//   : Flatten<PropsWithChildren<_StyledDefault<T>>>;

// type _NoizDatas<Data, Boolean> = _NoizProps<
//   Flatten<
//     {
//       datas: (Data extends {}
//         ? { [k in keyof Data]: Data[k] }
//         : never)[];
//       type?: Boolean;
//     } & Boolean
//   >,
//   true
// >;

// type _ChildDatas<Data> = {
//   datas: (Data extends {}
//     ? { [k in keyof Data]: Data[k] }
//     : never)[];
// };

// type _MakeChildDatas<Data extends { dataId: string }> = {
//   [k in Data["dataId"]]: {
//     datas: (Data extends {}
//       ? { [k in keyof Data] }
//       : Data[k])[];
//   };
// };

// type _MakeChildDatas_v2<
//   DataId extends string,
//   Props extends { datas: any }
// > = {
//   [k in DataId]: { datas: Props["datas"] };
// };

/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/// CSS

export type CssAttributeValueTypes =
  | string
  | number
  | (string & {})
  | (number & {})
  | undefined;

export type Position = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export type Dimensions = "width" | "height";

export type Direction = BooleanizeUnions<
  "horizontal" | "vertical"
>;

export type NavBarType = BooleanizeUnions<
  "icon" | "text" | "key-value"
>;

// type width = number;
// type height = number;

export type BasicLayoutProps = {
  minHeight?: string;
};

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////// STYLED COMPONENTS

//////// PROPS

export type BooleanSizes = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type BasicColorStyle = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export type BooleanDisplay = {
  display: boolean;
};

export type Sizes = "small" | "mid" | "big";

export type Size = { size: Sizes };

// type _StyledDefault<T> = Flatten<
//   T & {
//     css?: string;
//     className?: string;
//   }
// >;

declare global {}

// former global

export type MakeBooleansFromEnum<T> = {
  [props in keyof T]?: boolean;
};
export type MakeBooleansFromUnion<T extends string> = {
  [props in T]?: boolean;
};
///// HTML

///// React

///// CSS
export type CssProperties = keyof CSSProperties;

///// Styled

///////// Themes

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
// type NoizDatas<Data> = ND<Data>;
// type MakeAsChild<
//   DataId extends string,
//   Datas extends { datas: any }
// > = MAC<DataId, Datas>;
