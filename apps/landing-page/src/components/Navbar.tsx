import React from "react";
import { GitHubLinks } from "./GitHubLink";
import { NavbarComponent } from "../lib/style/Navbar.style";
import { IconZion } from "../lib/style/Body.style";

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
  const LINK_PREVIEW = "#jump_preview";
  const LINK_DASHBOARD = "#jump_dashboard";
  const LINK_COMM = "#jump_community";
  const LINK_SINGUP = "#jump_singup";
  // target
  const BLNK = "_blank";
  // github
  const ORG = "Zion-PTC";
  const REPO = "noiz-network-state";

  const DASHBOARD = new HreftargetProps({
    id: LINK_NAV_HID,
    href: LINK_DASHBOARD,
    text: "Dashboard",
  });

  const COMMUNITY = new HreftargetProps({
    id: LINK_NAV_HID,
    href: LINK_COMM,
    text: "Community",
  });

  const PREVIEW = new HreftargetProps({
    id: LINK_NAV,
    href: LINK_PREVIEW,
    text: "Preview",
  });

  const SINGUP_NOW = new HreftargetProps({
    id: ACTION_BTN,
    href: LINK_SINGUP,
    text: "Sing Up",
  });

  return (
    <>
      <HreTargetA {...DASHBOARD}></HreTargetA>
      <HreTargetA {...COMMUNITY}></HreTargetA>
      <HreTargetA {...PREVIEW}></HreTargetA>
      <HreTargetA {...SINGUP_NOW}></HreTargetA>
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
          <IconZion logoZion isFillContainer></IconZion>
        </div>
        <div id={LINKS_CONTAINER_ID}>
          <Links></Links>
        </div>
      </div>
    </NavbarComponent>
  );
};
