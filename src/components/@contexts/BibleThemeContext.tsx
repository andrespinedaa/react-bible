import React from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";
import styled from "styled-components";

const StyledBibleThemeContext = styled.div`
  padding: 0;
  font-family: ${(props) => props.theme.bibleFonts.primary};
  * {
    padding: 0;
    margin: 0;
  }
`;

function useBibleThemeContext() {
  const ThemeContext = React.createContext<DefaultTheme | null>(null);

  const useThemeContext = () => {
    const ctx = React.useContext(ThemeContext);
    if (ctx === null) {
      throw new Error("BibleTheme not found!!!");
    }
    return ctx;
  };

  const useCreateTheme = (theme: DefaultTheme): DefaultTheme => {
    return theme;
  };

  const Provider = ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: DefaultTheme;
  }) => {
    const theme = value.unstyled ? unstyledTheme : value;
    return (
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>
          <StyledBibleThemeContext>{children}</StyledBibleThemeContext>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  };

  return [Provider, useThemeContext, useCreateTheme] as const;
}

const unstyledTheme: DefaultTheme = {
  unstyled: false,
  defaultSize: "small",
  bibleColors: {
    primary: "#000000",
    secondary: "#000000",
    tertiary: "#000000",
  },
  prophecy: {
    bordeRadius: "12px",
    colorBg: "#fff",
    padding: "10px"
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
    spaceBetweenProphecyAndVerse: "15px",
    spacePsalmAndProphecy: "15px",
  },
  chapterButtons: {
    bordeRadius: "none",
    font: "primary",
    height: "auto",
    width: "auto",
    padding: "auto",
  },
};

export const [BibleTheme, useBibleTheme, useCreateTheme] =
  useBibleThemeContext();
