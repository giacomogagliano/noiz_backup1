import React, { Suspense } from "react";
import { Section } from "../../../components/Section";

export default function page() {
  return (
    <Suspense>
      <Section></Section>
    </Suspense>
  );
}
