import React from "react";
import { NewLoader } from "../../../lib/client/NewLoader";

export default function page() {
  return (
    <div
      style={{
        backgroundColor: "black",
        margin: 0,
        color: "white",
      }}
    >
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>

      <NewLoader
        stateB="opacity: 0; transform: translateY(40px); transition: transform 400ms ease-in-out, opacity 400ms ease-out;
        "
        stateA="opacity: 1; transform: translateY(0); transition: transform 400ms ease-in-out, opacity 400ms ease-out;
        "
        triggerKey="#text-big-sub"
        threshold={1}
      >
        <h2 id="text-big-sub">
          Welcome to the <span>new Era of internet.</span>
        </h2>
        <h3 id="text-big-sub">
          One that's powered by you. <span></span>
        </h3>
      </NewLoader>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
      <h1>lolol</h1>
    </div>
  );
}
