// "use client";

import React from "react";
import Client from "../components/Client";
import { Header } from "../components/Header";
// import { Header } from "../components/Header";
// import { FullPage } from "../components/FullPage";
// import { Navbar } from "../components/Navbar";
// import { Loader } from "../components/Loader";
// import { FromTop } from "../components/StylesSheet";
import Scroller from "../classes/Scroller";

// const DropFromTopBox = Loader;

function calculatePadding() {
  let bkpoint = 0;
  if (window.innerWidth > 767) {
    bkpoint = window.innerHeight * 0.96;
  } else if (window.innerWidth < 767) {
    bkpoint = window.innerHeight * 0.85;
  }

  return bkpoint;
}

// const Bla = () => {
//   const Element = () => (
//     <FromTop>
//       <div className="trigger-class">
//         <Navbar></Navbar>
//       </div>
//     </FromTop>
//   );
//   const cb = (entry: IntersectionObserverEntry) => {
//     entry.target.classList.toggle("show", entry.isIntersecting);
//   };
//   const JSXElement = Element();
//   return (
//     <DropFromTopBox
//       triggerkey={".trigger-class"}
//       elements={[JSXElement]}
//       cb={cb}
//     ></DropFromTopBox>
//   );
// };
export default function page() {
  return (
    <>
      <Scroller
        initialTopPos="-80px"
        transition="top 0.5s"
        Component="navbar"
      ></Scroller>
      {/* <Bla></Bla> */}
      {/* <FullPage></FullPage> */}
      <Header
        trigger1={"-100vw"}
        triggerButtonToTop={0}
        triggerButtonTransform={"100%"}
      ></Header>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
      <p>lol</p>
    </>
  );
}
