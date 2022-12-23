import React from "react";
import { IconPath, Icons } from "../../IconPath";

export type Home_v1Data = "Home_v1Data";
export type Home_v1Booleans = "Home_v1Booleans";
export type Home_v1Props = "Home_v1Props";
export type Home_v1ClassProps = "Home_v1ClassProps";
export type Home_v1AsChild = "Home_v1AsChild";

export const Home_v2 = (
  <>
    <path d="M11.3356 2.25259C11.7145 1.9158 12.2855 1.9158 12.6644 2.25259L21.6644 10.2526C22.0772 10.6195 22.1143 11.2516 21.7474 11.6644C21.3805 12.0771 20.7484 12.1143 20.3356 11.7474L20 11.4491V19C20 20.1046 19.1046 21 18 21H6.00001C4.89544 21 4.00001 20.1046 4.00001 19V11.4491L3.66437 11.7474C3.25159 12.1143 2.61952 12.0771 2.2526 11.6644C1.88568 11.2516 1.92286 10.6195 2.33565 10.2526L11.3356 2.25259ZM6.00001 9.67129V19H9.00001V14C9.00001 13.4477 9.44773 13 10 13H14C14.5523 13 15 13.4477 15 14V19H18V9.67129L12 4.33795L6.00001 9.67129ZM13 19V15H11V19H13Z"></path>
  </>
);

const home_ = new IconPath();
home_.name = Icons.album;
home_.JsxPath = Home_v2;
home_.filled = true;

export const home = home_;
