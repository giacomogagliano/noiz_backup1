import React, { Suspense } from "react";
import Client from "./Client";
import Client2 from "./Client2";

export default function page() {
  return (
    <div>
      async client
      <Suspense fallback={<div>load</div>}>
        <Client></Client>
        {/* <Client2></Client2> */}
      </Suspense>
    </div>
  );
}
