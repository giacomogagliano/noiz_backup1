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
export { BaseNoizProps } from "./global/BaseNoiz";
import {
  NoizProps as NP,
  MakeAsChild as MAC,
  NoizDatas as ND,
} from "./types";
import { FluidTheme as ft } from "./types/theme";
import { BooleanizeUnions, Flatten } from "./utility";

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

type _AllHTMLAttributes<T> = allHTML<T>;

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

type _BasicComponentProps<P> = PropsWithChildren<P>;
type _FunctionComponentElement<P> = fce<P>;
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
type _PropsWithJsxInstrinsicAttr<T> =
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

type _CssAttributeValueTypes =
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

type _Dimensions = "width" | "height";

type _Direction = BooleanizeUnions<
  "horizontal" | "vertical"
>;

export type NavBarType = BooleanizeUnions<
  "icon" | "text" | "key-value"
>;

// type width = number;
// type height = number;

type _BasicLayoutProps = {
  minHeight?: string;
};

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////// STYLED COMPONENTS

//////// PROPS

type _BooleanSizes = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type BasicColorStyle = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

type _BooleanDisplay = {
  display: boolean;
};

export type Sizes = "small" | "mid" | "big";

export type Size = { size: Sizes };

type _StyledDefault<T> = Flatten<
  T & {
    css?: string;
    className?: string;
  }
>;

declare global {}

// former global

type MakeBooleansFromEnum<T> = {
  [props in keyof T]?: boolean;
};
type MakeBooleansFromUnion<T extends string> = {
  [props in T]?: boolean;
};
///// HTML
type AllHTMLAttribute<T> = _AllHTMLAttributes<T>;

///// React

type BasicComponentProps<P> = _BasicComponentProps<P>;
type FunctionComponentElemen<P> =
  _FunctionComponentElement<P>;

///// CSS
type CssProperties = keyof CSSProperties;
type CssAttributeValueTypes = _CssAttributeValueTypes;
type Dimensions = _Dimensions;
type BasicLayoutProps = _BasicLayoutProps;
type PropsWithJsxInstrinsicAttr<T> =
  _PropsWithJsxInstrinsicAttr<T>;
type Direction = _Direction;

///// Styled
type StyledDefault<T> = _StyledDefault<T>;
type BooleanSizes = _BooleanSizes;
type BooleanDisplay = _BooleanDisplay;

///////// Themes
type FluidTheme = ft;
type NoizProps<T, B extends boolean = true> = NP<T, B>;

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
type NoizDatas<Data> = ND<Data>;
type MakeAsChild<
  DataId extends string,
  Datas extends { datas: any }
> = MAC<DataId, Datas>;
