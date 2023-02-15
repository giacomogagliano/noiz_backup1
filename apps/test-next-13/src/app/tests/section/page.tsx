import React, { Suspense } from "react";
import { Section } from "../../../classes/Section";

export default function page() {
  return (
    <Suspense>
      <Section></Section>
    </Suspense>
  );
}
