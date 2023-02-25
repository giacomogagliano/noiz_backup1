import { useEffect, useState } from "react";

export interface useToggleTheme_v1 {
  (prop: [string, string]): void;
}

export function useToggleTheme_v1(prop: [string, string]) {
  () => {
    const theme1 = prop[0];
    const theme2 = prop[1];
    const [theme, setTheme] = useState(theme1);
    const toggleTheme = () => {
      theme == theme1
        ? setTheme(theme2)
        : setTheme(theme1);
    };

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
    }, []);
    return { toggleTheme };
  };
}

export const useToggleLightDarkTheme = useToggleTheme_v1([
  "light",
  "dark",
]);
