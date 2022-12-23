import React, { FC } from "react";
import {
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import HTML from "../../HTML";
import "../../HTML/React";
import { GlobalStyle } from "../../HTML/React/style/Global";
import { lightTheme } from "../../HTML/React/themes";
HTML;
export type _app_v2Props = "_app_v2Props";

const theme = lightTheme;

export function _app_v2(props: { Component: FC }) {
  const { Component } = props;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component></Component>
    </ThemeProvider>
  );
}
