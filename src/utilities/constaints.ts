import MateoGospelJson from "../../bib/mateo.json";
import { useCreateTheme } from "../components/@contexts";
import { bibleType } from "./default";

export const themeMock = useCreateTheme({
  unstyled: false,
  defaultSize: "medium",
  jesusWords: false,
  bibleColors: {
    primary: "#000",
    secondary: "#000",
  },
  bibleSizes: {
    bibleHeight: {
      small: "256px",
      medium: "320px",
      portrait: "600px",
      large: "432px",
      xlarge: "600px",
      macro: "1000px",
    },
    bibleWidth: {
      small: "320px",
      medium: "480px",
      portrait: "480px",
      large: "640px",
      xlarge: "960px",
      macro: "1000px",
    },
    VerseTextSize: {
      large: "5px",
      small: "10px",
      medium: "15px",
      portrait: "15px",
      xlarge: "20px",
      macro: "25px",
    },
    VerseTitleSize: {
      large: "10px",
      small: "15px",
      medium: "20px",
      portrait: "25px",
      xlarge: "30px",
      macro: "35px",
    },
    VerseNumberSize: {
      large: "3px",
      small: "7px",
      medium: "11px",
      portrait: "11px",
      xlarge: "15px",
      macro: "20px",
    },
  },
  bibleHeading: {
    font: "primary",
    color: "primary",
  },
  jesusWordsColor: "red",
  prophecy: {
    colorBg: "#f2f2f2",
    padding: "15px",
    bordeRadius: "10px",
  },
  bibleFonts: {
    primary: "Sans-serif",
    secondary: "Roboto",
    tertiary: "Arial",
    cuaternary: "Times New Roman",
  },
  bibleVerses: {
    color: "secondary",
    font: "secondary",
    spaceBetweenVerses: "20px",
    spaceBetweenVerseAndNumber: "2px",
    spaceBetweenVersesAndTitle: "20px",
    spaceBetweenTitleAndSubTitle: "10px",
    spaceBetweenProphecyAndVerse: "20px",
    spacePsalmAndProphecy: "30px",
  },
  chapterButtons: {
    bordeRadius: "50%",
    font: "primary",
    height: "20px",
    padding: "10px",
    width: "20px",
  },
});

export const bibleMock: bibleType = MateoGospelJson;
