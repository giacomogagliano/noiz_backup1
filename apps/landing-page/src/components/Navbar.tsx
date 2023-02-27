import React from "react";
import { GitHubLinks } from "./GitHubLink";
import { LogodiZion, NavbarComponent } from "../lib/style/Navbar.style";

interface HreftargetProps {
  href: string;
  target?: string;
  id: string;
  text: string;
}
class HreftargetProps {
  constructor(props: HreftargetProps) {
    this.href = props.href;
    this.id = props.id;
    this.text = props.text;
    if (props.target) this.target = props.target;
  }
}

const HreTargetA = ({ href, target, id, text }: HreftargetProps) => (
  <a href={href} target={target} id={id}>
    <div>{text}</div>
  </a>
);

const Links = () => {
  // ids
  const LINK_NAV_HID = "link-nav-hidden";
  const LINK_NAV = "link-nav";
  const GITHUB_LINK_NAV = "github-link-nav";
  const ACTION_BTN = "action-btn";
  // hrefs
  const LINK_1 = "";
  const LINK_COMM = "https://community.getumbrel.com/";
  const START_LINK = "#start";
  // target
  const BLNK = "_blank";
  // github
  const ORG = "Zion-PTC";
  const REPO = "noiz-network-state";

  const APPLE_STORE = new HreftargetProps({
    id: LINK_NAV_HID,
    href: LINK_1,
    text: "Apple Store",
  });

  const COMMUNITY = new HreftargetProps({
    id: LINK_NAV_HID,
    href: LINK_COMM,
    text: "Community",
  });

  const WEHIRING = new HreftargetProps({
    id: LINK_NAV,
    href: LINK_1,
    text: "We are hiring!!",
  });

  const INSTALL_NOW = new HreftargetProps({
    id: ACTION_BTN,
    href: START_LINK,
    text: "Install Now",
  });

  return (
    <>
      <HreTargetA {...APPLE_STORE}></HreTargetA>
      <HreTargetA {...COMMUNITY}></HreTargetA>
      <HreTargetA {...WEHIRING}></HreTargetA>
      <HreTargetA {...INSTALL_NOW}></HreTargetA>
      <GitHubLinks id={GITHUB_LINK_NAV} org={ORG} repo={REPO}></GitHubLinks>
    </>
  );
};

type NavBarProps = { src?: string };
export const Navbar = ({
  bgcolor,
  buttonBgColor,
  color,
  stickyColor,
  src,
}: {
  bgcolor?: string;
  buttonBgColor?: string;
  color?: string;
  stickyColor?: string;
} & NavBarProps) => {
  const SRC = "assets/gotek-write.svg";
  const LOADING = "lazy";
  const ALT = "";
  const IMG_ID = "header-logo";
  const OUTER_CONTAINER_ID = "div-block-18";
  const LINKS_CONTAINER_ID = "div-block-19";
  return (
    <NavbarComponent
      bgcolor={bgcolor}
      buttonBgColor={buttonBgColor}
      color={color}
      stickyColor={stickyColor}
    >
      <div id={OUTER_CONTAINER_ID}>
        <div id={IMG_ID}>
          <LogodiZion logoZion isFillContainer></LogodiZion>
        </div>
        <div id={LINKS_CONTAINER_ID}>
          <Links></Links>
        </div>
      </div>
    </NavbarComponent>
  );
};
