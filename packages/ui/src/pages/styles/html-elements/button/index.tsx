import React from "react";
import { Button } from "../../../../HTML";

export default function index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Button primary>Sono un Button primario</Button>
      <Button secondary>Sono un Button secondario</Button>
    </div>
  );
}
