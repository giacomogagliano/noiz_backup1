import React from "react";
import { Input } from "../../../../HTML/React/classes/Basic";
import "../../../../HTML/React/classes/";

export default function index() {
  function change(e) {
    console.log(e.target.value);
  }
  return (
    <Input
      handleChange={change}
      placeholder="placeholdme"
      type="text"
    ></Input>
  );
}
