import React from "react";
import { useMdParser } from "../../HTML/React/lib/hooks";
export default function index() {
  const text = `<h2>Hello, world!</h2>
  <p>Welcome to my page 👀</p>`;

  const Content = () => useMdParser(text);
  return <Content></Content>;
}
