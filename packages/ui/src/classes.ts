import * as _classes from "./HTML/React/classes";
import type { Badge } from "./HTML/React/classes/Badge/";
import type { Card } from "./HTML/React/classes/Card";
import type { CardProps } from "./HTML/React/classes/Card";
import type { Chart } from "./HTML/React/classes/Chart";
import type { Contract } from "./HTML/React/classes/Contract";
import type { ContractProps } from "./HTML/React/classes/Contract";
import type { Form_v3 } from "./HTML/React/classes/Form/Form_v3";
import type { Form_v3Props } from "./HTML/React/classes/Form/Form_v3";
import type { Icon_v3Props } from "./HTML/React/classes/Icon/Icon_v3";
import type { Icon_v4 } from "./HTML/React/classes/Icon/Icon_v4";
import type { IconPath_v1 } from "./HTML/React/classes/IconPath/IconPath_v1";
import type { Image_v2 } from "./HTML/React/classes/Image/Image_v2";
import type { Image_v2Props } from "./HTML/React/classes/Image/Image_v2";
import type { ItemsArea_v2 } from "./HTML/React/classes/ItemsArea/ItemsArea_v2";
import type { ItemsArea_v2Props } from "./HTML/React/classes/ItemsArea/ItemsArea_v2";
import type { Md_v2 } from "./HTML/React/classes/Md/Md_v2";
import type { Md_v2Props } from "./HTML/React/classes/Md/Md_v2";
import type { NavBar_v4 } from "./HTML/React/classes/NavBar/NavBar_v4";
import type { NavBar_v4Props } from "./HTML/React/classes/NavBar/NavBar_v4";
import type { NavInput_v4 } from "./HTML/React/classes/NavBar/NavInput/NavInput_v4";
import type { NavInput_v4Props } from "./HTML/React/classes/NavBar/NavInput/NavInput_v4";
import type { NoizApp_v2 } from "./HTML/React/classes/_app/NoizApp/NoizApp_v2";
import type { NoizApp_v2Props } from "./HTML/React/classes/_app/NoizApp/NoizApp_v2";
import type { ResponseDiv_v1 } from "./HTML/React/classes/ResponseDiv/ResponseDiv_v1";
import type { ResponseDiv_v1Props } from "./HTML/React/classes/ResponseDiv/ResponseDiv_v1";
// pages
import type { ItemPage_v1 } from "./HTML/React/classes/Pages/ItemPage/ItemPage_v1";
import type { ItemPage_v2 } from "./HTML/React/classes/Pages/ItemPage/ItemPage_v2";
import type { ItemPage_v2Props } from "./HTML/React/classes/Pages/ItemPage/ItemPage_v2";
import type { Profile_v1 } from "./HTML/React/classes/Pages/Profile/Profile_v1";
import type { Profile_v2 } from "./HTML/React/classes/Pages/Profile/Profile_v2";
import type { Profile_v2Props } from "./HTML/React/classes/Pages/Profile/Profile_v2";
// basic
import type { Input_v2 } from "./HTML/React/classes/Basic/Input/Input_v2";
import type { Input_v2Props } from "./HTML/React/classes/Basic/Input/Input_v2";
import type { Label_v2 } from "./HTML/React/classes/Basic/Label/Label_v2";
import type { Label_v2Props } from "./HTML/React/classes/Basic/Label/Label_v2";
import type { Svg_v1 } from "./HTML/React/classes/Basic/Svg/Svg_v1";
// blockchain
import type { FactoryMethod } from "./HTML/React/classes/Blockchain/FactoryMethod";
import type { FactoryMethodProps } from "./HTML/React/classes/Blockchain/FactoryMethod";
import type { Getter_v1 } from "./HTML/React/classes/Blockchain/Getter/Getter_v1";
import type { Getter_v1Props } from "./HTML/React/classes/Blockchain/Getter/Getter_v1";
import type { Setter_v1 } from "./HTML/React/classes/Blockchain/Setter/Setter_v1";
import type { Setter_v1Props } from "./HTML/React/classes/Blockchain/Setter/Setter_v1";
import type { Styles_v1 } from "./HTML/React/classes/Styles/Styles_v1";
export const classe: classes = _classes;

interface _app {
  NoizApp: typeof NoizApp_v2;
  NoizAppProps: typeof NoizApp_v2Props;
}

interface Pages {
  ItemPage: typeof ItemPage_v2;
  ItemPageProps: typeof ItemPage_v2Props;
  ItemPage_v1: typeof ItemPage_v1;
  Profile: typeof Profile_v2;
  ProfileProps: typeof Profile_v2Props;
  Profile_v1: typeof Profile_v1;
}
interface classes {
  Badge: typeof Badge;
  Card: typeof Card;
  CardProps: typeof CardProps;
  Chart: typeof Chart;
  Contract: typeof Contract;
  ContractProps: typeof ContractProps;
  FactoryMethod: typeof FactoryMethod;
  FactoryMethodProps: typeof FactoryMethodProps;
  Form: typeof Form_v3;
  FormProps: typeof Form_v3Props;
  Getter: typeof Getter_v1;
  GetterProps: typeof Getter_v1Props;
  Icon: typeof Icon_v4;
  IconPath: typeof IconPath_v1;
  IconProps: typeof Icon_v3Props;
  Image: typeof Image_v2;
  ImageProps: typeof Image_v2Props;
  Input: typeof Input_v2;
  InputProps: typeof Input_v2Props;
  Item: Pages["ItemPage"];
  ItemProps: Pages["ItemPageProps"];
  ItemsArea: typeof ItemsArea_v2;
  ItemsAreaProps: typeof ItemsArea_v2Props;
  Label: typeof Label_v2;
  LabelProps: typeof Label_v2Props;
  Md: typeof Md_v2;
  MdProps: typeof Md_v2Props;
  NavBar: typeof NavBar_v4;
  NavBarProps: typeof NavBar_v4Props;
  NavInput: typeof NavInput_v4;
  NavInputProps: typeof NavInput_v4Props;
  NoizApp: _app["NoizApp"];
  NoizAppProps: _app["NoizAppProps"];
  Pages: Pages;
  Profile: typeof Profile_v2;
  ProfileProps: typeof Profile_v2Props;
  ResponseDiv: typeof ResponseDiv_v1;
  ResponseDivProps: typeof ResponseDiv_v1Props;
  Setter: typeof Setter_v1;
  SetterProps: typeof Setter_v1Props;
  Styles: typeof Styles_v1;
  Svg: typeof Svg_v1;
  _app: _app;
  _document: {};
}
