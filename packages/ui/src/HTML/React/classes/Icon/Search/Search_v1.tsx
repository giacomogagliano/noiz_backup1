import React from "react";
import { IconPath, Icons } from "../../IconPath";

export type Search_v1Data = "Search_v1Data";
export type Search_v1Booleans = "Search_v1Booleans";
export type Search_v1Props = "Search_v1Props";
export type Search_v1ClassProps = "Search_v1ClassProps";
export type Search_v1AsChild = "Search_v1AsChild";

export const Search_v2 = (
  <>
    <circle cx="10" cy="10" r="7" strokeWidth="2"></circle>
    <path
      d="M15 15L21 21"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const search_ = new IconPath();
search_.name = Icons.search;
search_.JsxPath = Search_v2;
search_.stroked = true;

export const search = search_;
