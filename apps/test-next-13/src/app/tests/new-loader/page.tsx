import React, { FunctionComponent } from "react";
import { stateA, stateB, Test } from "../../../lib/style/Test.style";
import dynamic from "next/dynamic";

function dyn(loading: FunctionComponent) {
  return dynamic(
    () => import("../../../lib/client/Loader").then(m => m.Loader),
    { ssr: false, loading }
  );
}

let NewLoader1 = dyn(() => <Test id="test-trigger">ciao</Test>);
let NewLoader2 = dyn(() => <Test id="test-trigger">addio</Test>);

export default function page() {
  return (
    <>
      <div>ciao</div>
      <NewLoader1
        triggerKey="#test-trigger"
        stateA={stateA as unknown as string}
        stateB={stateB as unknown as string}
        threshold={1}
      >
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
        <Test id="test-trigger">ciao</Test>
      </NewLoader1>
      <div>no effect</div>
      <div>no effect</div>
      <NewLoader2
        triggerKey="#test-2"
        stateA="color:blue; transition: 3s;"
        stateB="color: green;"
      >
        <div id="test-2">other effect</div>
      </NewLoader2>
    </>
  );
}
