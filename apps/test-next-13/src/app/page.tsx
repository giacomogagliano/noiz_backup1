// "use client";

import React from "react";
import Client from "../components/Client";
import { Header } from "../components/Header";
import Scroller from "../classes/Scroller";
import { FullPage } from "../components/FullPage";
export default function page() {
  return (
    <>
      <Scroller
        initialTopPos="-80px"
        transition="top 0.5s"
        Component="navbar"
      ></Scroller>
      {/* <Bla></Bla> */}
      <Header
        trigger1={"-100vw"}
        triggerButtonToTop={0}
        triggerButtonTransform={"100%"}
      ></Header>
      <FullPage></FullPage>
    </>
  );
}
