import React, { Component, Suspense, use, useState } from "react";
import { Why } from "../../../classes/Why";
// import { WhyData } from "../../../pages/api/why";

export default function page() {
  return (
    <>
      <Why></Why>
      {/* <Suspense fallback={<p>loading</p>}></Suspense> */}
      {/* <p>{ciao}</p>
      <button onClick={handleclick}>clicck</button> */}
    </>
  );
}
