import { BooleanizeUnions } from "../../lib/utility";

export type IconPath_v1Data = "IconPath_v1Data";
export type IconPath_v1Booleans = "IconPath_v1Booleans";
export type IconPath_v1Props = "IconPath_v1Props";
export type IconPath_v1ClassProps =
  "IconPath_v1ClassProps";
export type IconPath_v1AsChild = "IconPath_v1AsChild";

export enum Icons_v1 {
  account = "account",
  album = "album",
  like = "like",
  arrowBack = "arrowBack",
  arrowLeft = "arrowLeft",
  arrowRight = "arrowRight",
  logoZion = "logoZion",
  moon = "moon",
  filterAlt = "filterAlt",
  home = "home",
  repost = "repost",
  search = "search",
  sun = "sun",
  trending = "trending",
  more_normal = "more_normal",
  queue = "queue",
  share = "share",
  tracks = "tracks",
  twitter = "twitter",
  scrollToTop = "scrollToTop",
  buttoned = "buttoned",
  filled = "filled",
  stroked = "stroked",
  secondary = "secondary",
}
export type IconsPath_v1Type = keyof typeof Icons_v1;
export type IconsPath_v1Options =
  BooleanizeUnions<IconsPath_v1Type>;

enum Icon_v3Svgs {
  Svg24 = "Svg24",
  Svg51 = "Svg51",
}
type Icon_v3SvgTypes = keyof typeof Icon_v3Svgs;

export interface IconPath_v1 {
  name: IconsPath_v1Type;
  Component: () => JSX.Element;
  layout: Icon_v3SvgTypes;
  JsxPath: JSX.Element;
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
}

export class IconPath_v1 {
  constructor(
    name: IconsPath_v1Type = "account",
    Component: () => JSX.Element = () => <></>,
    layout: Icon_v3SvgTypes = "Svg24",
    JsxPath: JSX.Element = <path></path>
  ) {
    this.name = name;
    this.Component = Component;
    this.layout = layout;
    this.JsxPath = JsxPath;
  }
}
//TODO #35 non capisco se devo aggiungere la nuova basenoiz
