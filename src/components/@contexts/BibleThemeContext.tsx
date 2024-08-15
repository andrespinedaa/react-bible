import React from "react";
import { ThemeProvider } from "styled-components";
import { BibleThemeModel } from "../@theme/theme";

function useBibleThemeContext() {
  const ThemeContext = React.createContext<BibleThemeModel | null>(null);

  const useThemeContext = () => {
    const ctx = React.useContext(ThemeContext);
    if (ctx === null) {
      throw new Error("BibleTheme not found!!!");
    }
    return ctx;
  };

  const Provider = ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: BibleThemeModel;
  }) => {
    const theme = value.unstyled ? unstyledTheme : value;
    return (
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    );
  };

  return [Provider, useThemeContext] as const;
}

const unstyledTheme: BibleThemeModel = {
  unstyled: false,
  defaultSize: "small",
  bibleColors: {
    primary: "#000000",
    secondary: "#000000",
    tertiary: "#000000",
  },
  bibleFonts: {
    primary: "Arial",
    secondary: "Arial",
    tertiary: "Arial",
  },
  bibleSizes: {
    bibleWidth: {
      small: "100%",
      medium: "100%",
      large: "100%",
      portrait: "100%",
      xlarge: "100%",
    },
    bibleHeight: {
      small: "100%",
      medium: "100%",
      large: "100%",
      portrait: "100%",
      xlarge: "100%",
    },
    VerseTextSize: {
      small: "1em",
      medium: "1em",
      large: "1em",
      portrait: "1em",
      xlarge: "1em",
    },
    VerseTitleSize: {
      small: "1em",
      medium: "1em",
      large: "1em",
      portrait: "1em",
      xlarge: "1em",
    },
    VerseNumberSize: {
      small: "1em",
      medium: "1em",
      large: "1em",
      portrait: "1em",
      xlarge: "1em",
    },
  },
  bibleHeading: {
    font: "primary",
    color: "primary",
  },
  bibleVerses: {
    color: "primary",
    font: "primary",
    spaceBetweenVerses: "10px",
    spaceBetweenVerseAndNumber: "10px",
    spaceBetweenVersesAndTitle: "10px",
    spaceBetweenTitleAndSubTitle: "10px",
  },
};

export const [BibleTheme, useBibleTheme] = useBibleThemeContext();
