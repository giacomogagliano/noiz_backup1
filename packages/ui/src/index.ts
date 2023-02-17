// HTML
export * as HTML from "./HTML";
//// REACT Library
import * as _React from "./HTML/React";
export const React: ReactType = _React;

import type { Area } from "./HTML/React/style/Areas";
import type { Area2 } from "./HTML/React/style/Areas";
import type { Area3 } from "./HTML/React/style/Areas";
import type { Avatar } from "./HTML/React/style/Areas/Avatar";
import type { BottomSpace } from "./HTML/React/style/Areas/BottomSpace";
import type { CardArea } from "./HTML/React/style/Areas/CardArea";
import type { CircleArea } from "./HTML/React/style/Areas/CircleArea";
import type { ContentArea } from "./HTML/React/style/Areas/ContentArea";
import type { InfoSub } from "./HTML/React/style/Areas/InfoSub";
import type { InfoSubDetails } from "./HTML/React/style/Areas/InfoSubDetails";
import type { LoadingWavesArea } from "./HTML/React/style/Areas/LoadingWavesArea";
import type { ProfileId } from "./HTML/React/style/Areas/ProfileId";
import type { Shape } from "./HTML/React/style/Areas/Shape";
import type { Social } from "./HTML/React/style/Areas/Social";
import type { TextArea } from "./HTML/React/style/Areas/TextArea";
import type { TextArea_v1 } from "./HTML/React/style/Areas/TextArea";
import type {} from "./HTML/React/style/";

import type { BarsWave } from "./HTML/React/style/Loaders/BarsWave";
import type { LdsHourglass } from "./HTML/React/style/Loaders/LdsHourglass";

import type { BaseNoiz_v4 } from "./HTML/React/lib/global/BaseNoiz/BaseNoiz_v4";
import type { BaseNoiz_v4Props } from "./HTML/React/lib/global/BaseNoiz/BaseNoiz_v4";
import type { IComponentDecorator_v1 } from "./HTML/React/lib/global/BaseNoiz/ComponentDecorator/ComponentDecorator_v1";

import type { IA } from "./HTML/React/style/HTMLElements/A";
import type { IAreaTagHtml } from "./HTML/React/style/HTMLElements/AreaTagHtml";
import type { IArticle } from "./HTML/React/style/HTMLElements/Article";
import type { IAside } from "./HTML/React/style/HTMLElements/Aside";
import type { IAudio } from "./HTML/React/style/HTMLElements/Audio";
import type { Button } from "./HTML/React/style/HTMLElements/Button";
import type { ICanvas } from "./HTML/React/style/HTMLElements/Canvas";
import type { ICircle } from "./HTML/React/style/HTMLElements/Circle";
import type { ICode } from "./HTML/React/style/HTMLElements/Code";
import type { Div } from "./HTML/React/style/HTMLElements/Div";
import type { IForm } from "./HTML/React/style/HTMLElements/Form";
import type { italic } from "./HTML/React/style/HTMLElements/H1";
import type { dimmed } from "./HTML/React/style/HTMLElements/H1";
import type { H2 } from "./HTML/React/style/HTMLElements/H2";
import type { H3 } from "./HTML/React/style/HTMLElements/H3";
import type { Img } from "./HTML/React/style/HTMLElements/Img";
import type { IInput } from "./HTML/React/style/HTMLElements/Input";
import type { P } from "./HTML/React/style/HTMLElements/P";
import type { Path } from "./HTML/React/style/HTMLElements/Path";
import type { IText } from "./HTML/React/style/HTMLElements/Text";

import type { ConnectionButton } from "./HTML/React/style/Buttons/ConnectionButtons";
import type { HomeButton } from "./HTML/React/style/Buttons/HomeButton";
import type { SVGButton } from "./HTML/React/style/Buttons/SVGButton";
import type { ScrollToTopButton_v1 } from "./HTML/React/style/Buttons/ScrollToTop";
import type { ThemeButton } from "./HTML/React/style/Buttons/ThemeButton";

import type { Contract_v3 } from "./HTML/React/classes/Pages/Contract/Contract_v3";

import type { Card as CompCard } from "./HTML/React/components/Card";
import type { Badge } from "./HTML/React/components/Badge";
import type { Form } from "./HTML/React/components/Form";

import type { GlobalStyle } from "./HTML/React/style/Global/GlobalStyle";
import type { robotoGoogleQuery } from "./HTML/React/style/Global/GlobalStyle";
import type { NftMinterGlobalStyle } from "./HTML/React/style/Global/NftMinter";
import type { Footer } from "./HTML/React/style/Layout/Footer";
import type { NavBar as LayoutNavbar } from "./HTML/React/style/Layout/NavBar";

_React.;

interface ReactType extends areas, buttons {
  layout: layout;
  global: global;
  areas: areas;
  buttons: buttons;
  components: components;
  A: IA;
  AreaTagHtml: IAreaTagHtml;
  Article: IArticle;
  Aside: IAside;
  Audio: IAudio;
  Avatar: typeof Avatar;
  BarsWave: typeof BarsWave;
  BaseNoiz: typeof BaseNoiz_v4;
  BaseNoizProps: typeof BaseNoiz_v4Props;
  Button: typeof Button;
  Canvas: ICanvas;
  Circle: ICircle;
  Code: ICode;
  ComponentDecorator: IComponentDecorator_v1;
  Contract: typeof Contract_v3;
  Div: typeof Div;
  Form: IForm;
  H2: typeof H2;
  H3: typeof H3;
  Img: typeof Img;
  Input: IInput;
  LdsHourglass: typeof LdsHourglass;
  P: typeof P;
  Path: typeof Path;
  Text: IText;
  ProfileId: typeof ProfileId;
  dimmed: typeof dimmed;
  italic: typeof italic;
}
interface areas {
  Area: typeof Area;
  Area2: typeof Area2;
  Area3: typeof Area3;
  BottomSpace: typeof BottomSpace;
  CardArea: typeof CardArea;
  CircleArea: typeof CircleArea;
  ContentArea: typeof ContentArea;
  InfoSub: typeof InfoSub;
  InfoSubDetails: typeof InfoSubDetails;
  LoadingWavesArea: typeof LoadingWavesArea;
  Shape: typeof Shape;
  Social: typeof Social;
  TextArea: typeof TextArea;
  TextArea_v1: typeof TextArea_v1;
}
interface buttons {
  ThemeButton: typeof ThemeButton;
  SVGButton: typeof SVGButton;
  ScrollToTopButton_v1: typeof ScrollToTopButton_v1;
  ConnectionButton: typeof ConnectionButton;
  HomeButton: typeof HomeButton;
}
interface components {
  Badge: typeof Badge;
  Card: typeof CompCard;
  Form: typeof Form;
}
interface global {
  GlobalStyle: typeof GlobalStyle;
  NftMinterGlobalStyle: typeof NftMinterGlobalStyle;
  robotoGoogleQuery: typeof robotoGoogleQuery;
}
interface layout {
  Footer: typeof Footer;
  NavBar: typeof LayoutNavbar;
  ContentArea: areas["ContentArea"];
}

export {
  themes,
  classes,
  lib,
  styled,
} from "./HTML/React";
export {
  Badge,
  BadgeProps,
  Input,
  InputProps,
  Label,
  LabelProps,
  Svg,
  FactoryMethod,
  FactoryMethodProps,
  Getter,
  GetterProps,
  Setter,
  SetterProps,
  Card,
  CardProps,
  Chart,
  Form,
  FormProps,
  Icon,
  IconProps,
  IconPath,
  Image,
  ImageProps,
  ItemsArea,
  ItemsAreaProps,
  Md,
  MdProps,
  NavBar,
  NavBarProps,
  Profile,
  ProfileProps,
  Item,
  ItemProps,
  Contract,
  ContractProps,
  ResponseDiv,
  ResponseDivProps,
} from "./HTML/React/classes";

//// NEXT Library
import * as _Next from "./HTML/Next";
export const Next: NextType = _Next;
import type { getStatic } from "./HTML/Next/static/getStatic";
import type { ram } from "./HTML/Next/static/ram";
import type { narrowGenericObject } from "./HTML/Next/static/narrowGenericObject";

interface NextType {
  staticProps: {
    getStatic: typeof getStatic;
    ram: typeof ram;
    narrowGenericObjectFunc: narrowGenericObject;
  };
}

// COLOR
import * as _Colors from "./colors";
export const Colors: ColorsType = _Colors;
interface ColorsType {}

// CLI
export * from "./CLI";

import * as x from "./colors";
import { Card, Card, NavBar } from "./HTML/React/classes";
import { BadgeStyle } from "./HTML/React/components/Badge/Badge.style";
