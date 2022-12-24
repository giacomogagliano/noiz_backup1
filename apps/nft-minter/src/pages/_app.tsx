// @ts-nocheck
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../components/GlobalStyle";
import React, { useEffect, useRef, useState } from "react";
import { LayoutProps } from "../components/Types/";
import { HTML, themes } from "@zionstate/ui";

const lightTheme = themes.lightTheme;
const darkTheme = themes.darkTheme;

const useEthereum = HTML.React.lib.hooks.useEthereum;

export type ProfilePropsFromApp = {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  columns: number;
};

export type MintPropsFromApp = {};

export type BasePropsFromApp = {
  layout: LayoutProps;
  profile: ProfilePropsFromApp;
  mint: MintPropsFromApp;
};

type AppStyle = { height: number };

const App = styled.div<AppStyle>`
  height: ${props => props.height}px;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
`;

const rows = 14;
const columns = 8;

type ApplicationProps = {
  Component: any;
  pageProps: BasePropsFromApp;
  loading: boolean;
};

function Application(props: ApplicationProps) {
  const { Component, pageProps } = props;

  const [appHeight, setAppHeight] = useState(0);
  const [theme, setTheme] = useState("light");
  const [componentAreaHeight, setComponentAreaHeight] =
    useState(0);
  const app = useRef<HTMLDivElement>();
  const navbar = useRef<HTMLHeadingElement>();
  const footer = useRef<HTMLHeadingElement>();

  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [blockSize, setBlockSize] = useState(0);
  const contentArea = useRef<HTMLDivElement>();
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    theme == "light"
      ? setTheme("dark")
      : setTheme("light");
  };

  const scrollToTop = () => {
    contentArea.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const profile = {
    parentWidth,
    parentHeight,
    width,
    height,
    blockSize,
    columns,
  };
  pageProps.profile = profile;

  const layout: LayoutProps = {
    contentArea,
    navbar,
    footer,
    loading,
    handleClick: toggleTheme,
    children: "not set",
    connect: undefined,
    landing: undefined,
    nft: undefined,
    metamask: useEthereum(),
    backToTopHandleClick: scrollToTop,
    showButton: showButton,
    theme: theme == "light" ? lightTheme : darkTheme,
    isLightTheme: theme == "light" ? true : false,
  };
  pageProps.layout = layout;

  // Catches the dimensions of footer and header and set
  // container height to be the diff with window height
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)")
        .matches
    ) {
      setTheme("dark");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", event => {
        const newColorScheme = event.matches
          ? "dark"
          : "light";
        console.log("changedtheme");
        setTheme(newColorScheme);
      });
    setAppHeight(window.visualViewport.height);
    setComponentAreaHeight(
      window.visualViewport.height -
        footer.current.clientHeight +
        navbar.current.clientHeight
    );
    // orientation change
    window.addEventListener("resize", () =>
      console.log("resized")
    );
  }, []);

  // set the content area height to be the same as the
  // parent element.
  useEffect(() => {
    setParentWidth(contentArea.current.clientWidth);
    setParentHeight(contentArea.current.clientHeight);
  }, [componentAreaHeight]);

  // set the height of the area parent
  useEffect(() => {
    setHeight(parentHeight * 0.99);
  }, [parentHeight]);

  // sets the grid dimension
  // this should probably be conditional as it should happen
  // only in pages where a list of items is shown.
  useEffect(() => {
    setBlockSize(height / rows);
    setWidth((height / rows) * columns);
  }, [height]);

  useEffect(() => {
    contentArea.current.addEventListener("scroll", () => {
      let profileAreaY = window.document
        .getElementById("page")
        .getBoundingClientRect().y;
      let contentAreaY =
        contentArea.current.getBoundingClientRect().y;
      let scrollPosition = contentAreaY - profileAreaY;

      if (scrollPosition > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(false);
    }
    // setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    if (!loading) {
      const loader = document.getElementById("cazzo");
      if (loader) loader.style.display = "none";
    }
  }, [loading]);

  return (
    <ThemeProvider
      theme={theme == "light" ? lightTheme : darkTheme}
    >
      <GlobalStyle />
      <App ref={app} height={appHeight}>
        <Component {...pageProps} />
      </App>
    </ThemeProvider>
  );
}
export default Application;
