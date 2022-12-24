// this file is used for backward compatibility...
// deprecate asap as it is exported inside in /types/utility
export type {
  BasicFluidThemedStyledProps,
  BooleanizeUnions,
  ClassicElement,
  CssKeysFromStringArray,
  CssPropUnion,
  CssStyled,
  Flatten,
  FluidStyled,
  FluidThemed,
  GCssStyled,
  OmitCss,
  PickCss,
  RequiredCss,
  ZionCss,
} from "./types/utility";

export type EnumToUnion<T> = keyof T;
