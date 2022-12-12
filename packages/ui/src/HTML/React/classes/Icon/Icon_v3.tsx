// import { dataGuard } from "@zionstate/zionbase/utils";
import styled from "styled-components";
import { LogoZion } from "./LogoZion";
import { Svg as SvgClass } from "../Basic/Svg";
import { album } from "./Album/Album_v1";
import path from "node:path/posix";
import { arrowBack } from "./ArrowBack/ArrowBack_v1";
import { account } from "./Account/Account_v1";
import { Arrowleft } from "./ArrowLeft/ArrowLeft_v1";
import { IconPath, IconPathOptions } from "../IconPath";
import { arrowRight } from "./ArrowRight/ArrowRight_v1";
import { filterAlt } from "./FilterAlt/FilterAlt_v1";
import { twitter } from "./Twitter/Twitter_v1";
import { trending } from "./Trending/Trending_v1";
import { tracks } from "./Tracks/Tracks_v1";
import { logoZion } from "./LogoZion/LogoZion_v1";
import { home } from "./Home/Home_v1";
import { sun } from "./Sun/Sun_v1";
import { share } from "./Share/Share_v1";
import { search } from "./Search/Search_v1";
import { scrollToTop } from "./ScrollToTop/ScrollToTop_v1";
import { repost } from "./Repost/Repost_v1";
import { queue } from "./Queue/Queue_v1";
import { like } from "./Like/Like_v1";
import { moon } from "./Moon/Moon_v1";
import { more_normal } from "./More_Normal/More_Normal_v1";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export type StyledSvgProps = {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
};

export interface Icon_v3Props
  extends BaseNoizProps<layoutTypes, styleTypes>,
    IconPathOptions {
  svg?: {
    filled?: boolean | undefined;
    stroked?: boolean | undefined;
    secondary?: boolean | undefined;
  };
}
export class Icon_v3Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface Icon_v3State
  extends BaseNoizState<Icon_v3Props> {}
export class Icon_v3State {}

export class Icon_v3 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Icon_v3Props,
  Icon_v3State
> {
  static IconPaths: IconPath[] = [
    account,
    album,
    arrowBack,
    Arrowleft,
    arrowRight,
    filterAlt,
    home,
    like,
    logoZion,
    moon,
    more_normal,
    queue,
    repost,
    scrollToTop,
    search,
    share,
    tracks,
    sun,
    trending,
    twitter,
  ];

  static defaultProps = {
    layout: layouts.main,
    style: styles.defaultStyle,
  };

  static svgslist(): string[] {
    return Icon_v3.IconPaths.map(path => {
      return path.name;
    });
  }

  static SvgComponent(
    type: typeof Icon_v3["IconPaths"][number]["name"]
  ) {
    return Icon_v3.IconPaths.find(
      path => path.name === type
    );
  }

  constructor(props: Icon_v3Props) {
    super(props);
    this.state = {
      layout: () => <></>,
      style: styled(this.Html)``,
    };
  }

  LogoZion = LogoZion;

  Svg24(props: Icon_v3Props) {
    return (
      <svg
        className={props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        {props.children}
      </svg>
    );
  }

  Svg51(props: Icon_v3Props) {
    return (
      <svg
        className={props.className}
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
      >
        {props.children}
      </svg>
    );
  }

  main = (p: Icon_v3Props) => {
    let icon: JSX.Element = <></>;
    let layout, filled, stroked, secondary;
    Icon_v3.IconPaths.forEach(path => {
      if (this.props[path.name] === true) {
        layout = path.layout;
        filled = path.filled;
        stroked = path.stroked;
        secondary = path.secondary;
        icon = path.JsxPath;
      }
    });
    const dec = new this.ComponentDecorator(this.Svg24);
    const rate = dec.decorate.bind(dec);
    const torate =
      layout === "Svg24" ? this.Svg24 : this.Svg51;
    const Rated = rate(torate).with(this.defaultStyle);
    return (
      <Rated
        layout={layout}
        style="defaultStyle"
        filled={filled}
        stroked={stroked}
        secondary={secondary}
        {...p}
      >
        {icon}
      </Rated>
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)`
    // #10 aggiungere qui
    width: 100%;
    height: 100%;
    ${props => {
      if (props.like)
        console.log(props.theme.primary.color);
      return "";
    }}
    path {
      fill: ${props =>
        props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : ""};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
    circle {
      fill: ${props =>
        props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : ""};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  chooseIcon2() {
    let El: () => JSX.Element = () => <div>ciao</div>;
    Icon_v3.IconPaths.forEach(path => {
      if (this.props[path.name] === true)
        El = () => (
          <SvgClass
            filled={path.filled}
            stroked={path.stroked}
            secondary={path.secondary}
            layout="Svg24"
            style="defaultStyle"
          >
            {path.JsxPath}
          </SvgClass>
        );
    });
    return El;
  }
}
