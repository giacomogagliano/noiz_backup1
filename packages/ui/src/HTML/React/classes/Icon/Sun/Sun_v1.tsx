import React from "react";
import { IconPath, Icons } from "../../IconPath";

export type Sun_v1Data = "Sun_v1Data";
export type Sun_v1Booleans = "Sun_v1Booleans";
export type Sun_v1Props = "Sun_v1Props";
export type Sun_v1ClassProps = "Sun_v1ClassProps";
export type Sun_v1AsChild = "Sun_v1AsChild";

export const Sun_v2 = (
  <>
    <circle cx="12" cy="12" r="5.25" strokeWidth="2" />
    <path
      d="M12 4V2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V20"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12L22 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4142 4.58579L18 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.58579 19.4142L6 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4142 19.4142L18 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.58579 4.58579L6 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L4 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);
const sun_ = new IconPath();
sun_.name = Icons.sun;
sun_.JsxPath = Sun_v2;
sun_.stroked = true;

export const sun = sun_;
