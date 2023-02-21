"use client";
import React, { Component, use, useEffect, useState } from "react";

function foo() {
  return new Promise<boolean>((res, rej) => {
    setTimeout(() => res(true), 2000);
  });
}
async function wait(global) {
  await foo();
  let response;
  if ("window" in global) {
    response = true;
    // cb(true);
    console.log("isWindow present? ", response);
    return response;
  } else {
    response = false;
    // cb(false);
    console.log("isWindow present? ", response);
    // throw new Error("errorrrrr");
    return response;
  }
}
function wait2(global) {
  return new Promise((res, rej) => {
    if ("window" in global) res(true);
    else res(false);
  });
}

export default function Client() {
  const [res, setRes] = useState(false);
  use(wait(global).catch(e => use(e)));
  wait(global).then(e => setRes(e));
  // wait(global)
  //   .catch(e => {
  //     // use(e);
  //   })
  //   .then(e => console.log("then: ", e));

  // setRes(req);
  // use(wait());
  // useEffect(() => {
  //   if (window) use(wait(window));
  // }, []);

  // const win = use<Window>(wait(window ? window : null));
  // console.log(win);
  return <div>{`${res}`}</div>;
}
