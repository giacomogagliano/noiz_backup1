import { Component, ReactNode } from "react";
import styled from "styled-components";
import { IconPath, IconPathOptions } from "../IconPath";
import {
  account,
  album,
  arrowBack,
  arrowleft,
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
  sun,
  tracks,
  trending,
  twitter,
} from "./";

export type StyledSvg_v4Props = {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
};

export interface Icon_v4Props extends IconPathOptions {
  className?: string;
  children?: ReactNode;
  svg?: {
    filled?: boolean | undefined;
    stroked?: boolean | undefined;
    secondary?: boolean | undefined;
  };
  isFillContainer?: boolean;
}

export class Icon_v4 extends Component<Icon_v4Props> {
  static IconPaths: IconPath[] = [];

  static svgslist(): string[] {
    const loaded = [
      account,
      album,
      arrowBack,
      arrowleft,
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
    return loaded.map(path => {
      return path.name;
    });
  }

  static SvgComponent(
    type: typeof Icon_v4["IconPaths"][number]["name"]
  ) {
    return Icon_v4.IconPaths.find(
      path => path.name === type
    );
  }

  constructor(props: Icon_v4Props) {
    super(props);
    Icon_v4.IconPaths.push(account);
    Icon_v4.IconPaths.push(album);
    Icon_v4.IconPaths.push(arrowBack);
    Icon_v4.IconPaths.push(arrowleft);
    Icon_v4.IconPaths.push(arrowRight);
    Icon_v4.IconPaths.push(filterAlt);
    Icon_v4.IconPaths.push(home);
    Icon_v4.IconPaths.push(like);
    Icon_v4.IconPaths.push(logoZion);
    Icon_v4.IconPaths.push(moon);
    Icon_v4.IconPaths.push(more_normal);
    Icon_v4.IconPaths.push(queue);
    Icon_v4.IconPaths.push(repost);
    Icon_v4.IconPaths.push(scrollToTop);
    Icon_v4.IconPaths.push(search);
    Icon_v4.IconPaths.push(share);
    Icon_v4.IconPaths.push(tracks);
    Icon_v4.IconPaths.push(sun);
    Icon_v4.IconPaths.push(trending);
    Icon_v4.IconPaths.push(twitter);

    Icon_v4.IconPaths.forEach(path => {
      if (this.props[path.name] === true) {
        this.Layout = this[path.layout];
        this.filled = path.filled;
        this.stroked = path.stroked;
        this.secondary = path.secondary;
        this.Icon = path.JsxPath;
      }
    });
  }
  filled?: boolean = false;
  stroked?: boolean = false;
  secondary?: boolean = false;
  Icon?: JSX.Element = (<></>);

  Svg24(props: Icon_v4Props) {
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

  Svg51(props: Icon_v4Props) {
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

  Layout = (props: Icon_v4Props) => <>{props.account}</>;

  Style = styled(this.Layout)`
    ${props => {
      if (props.isFillContainer)
        return "width:100%; height:100%;";
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

  render(): ReactNode {
    // console.log(this.Layout);

    return (
      <this.Style
        as={this.Layout}
        filled={this.filled}
        stroked={this.stroked}
        secondary={this.secondary}
        isFillContainer={this.props.isFillContainer}
      >
        {this.Icon}
      </this.Style>
    );
  }
}
