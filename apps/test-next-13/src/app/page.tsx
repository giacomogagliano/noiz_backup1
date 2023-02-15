import React from "react";
import { newui } from "@zaionstate/new-ui";
import ClientComp from "./ClientComp";

export default function page() {
  return (
    <div>
      {newui}
      <ClientComp></ClientComp>
    </div>
  );
}
