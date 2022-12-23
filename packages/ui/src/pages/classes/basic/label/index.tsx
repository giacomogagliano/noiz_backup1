import React from "react";
import { Label } from "../../../../HTML/React/classes/Basic";

export default function index() {
  function change(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target);
  }
  return (
    <Label
      name="holding"
      placeholder="placeholding"
      type="text"
      handleChange={change}
    ></Label>
  );
}
