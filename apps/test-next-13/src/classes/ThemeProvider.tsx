"use clinet";
import React, { ReactNode } from "react";
import { ThemeProvider as TP } from "styled-components";
import { darkTheme, lightTheme } from "@zionstate/ui/style";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <TP theme={lightTheme}>{children}</TP>;
}
