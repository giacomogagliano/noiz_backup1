import React from "react";
import { Contract } from "../../../../HTML/React";

export default function index() {
  return (
    <Contract
      price={Math.round((35 / 50) * 100) / 100}
    ></Contract>
  );
}
