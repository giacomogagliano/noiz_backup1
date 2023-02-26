import React from "react";
import { AppearFromBottomLoader } from "../components/AppearFromBottomLoader";

export function TextBigSub() {
  return (
    <>
      <AppearFromBottomLoader triggerKey="#big-heading">
        <h2 id="big-heading">
          Welcome to the new<span id="text-span-"> Era of internet.</span>
        </h2>
      </AppearFromBottomLoader>
      <AppearFromBottomLoader triggerKey="#SubsHeading">
        <h3 id="SubsHeading">
          One that's powered by you. <span id="text-span-"></span>
        </h3>
      </AppearFromBottomLoader>
    </>
  );
}
