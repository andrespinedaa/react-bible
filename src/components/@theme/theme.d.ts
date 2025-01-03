import React from "react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    /* Option for return the component without styles */
    unstyled: boolean;
    /* Default size for all */
    defaultSize: sizes;
    /* The colors for text, headgraphs, Jesus' words, etc */
    bibleColors: {
      [Key in Keys]?: string;
    };
    /* The colors for jesus' words   */
    jesusWordsColor?: React.CSSProperties["color"];
    jesusWords: boolean;
    /* The prophecy colors */
    prophecy: {
      colorBg: React.CSSProperties["color"];
      padding: React.CSSProperties["padding"];
      bordeRadius: React.CSSProperties["borderRadius"];
    };
    /* The fonts for text, titles, subtitles, numbers, etc*/
    bibleFonts: {
      [Key in Keys]?: string;
    };
    /* The size for the bible, spaces between verses, titles, numbers, etc*/
    bibleSizes: {
      bibleWidth: sizeMap<"width">;
      bibleHeight: sizeMap<"height">;
      VerseTextSize: sizeMap<"fontSize">;
      VerseTitleSize: sizeMap<"fontSize">;
      VerseNumberSize: sizeMap<"fontSize">;
    };
    /* The size and color for the titles */
    bibleHeading: {
      font: Keys;
      color: Keys;
    };
    /* The size and color for the verses */
    bibleVerses: {
      font: Keys;
      color: Keys;
      spaceBetweenVerses: React.CSSProperties["marginBottom"];
      spaceBetweenVerseAndNumber: React.CSSProperties["marginRight"];
      spaceBetweenVersesAndTitle: React.CSSProperties["marginTop"];
      spaceBetweenTitleAndSubTitle: React.CSSProperties["gap"];
      spaceBetweenProphecyAndVerse: React.CSSProperties["margin"];
      spacePsalmAndProphecy: React.CSSProperties["margin"];
    };

    chapterButtons: {
      padding: React.CSSProperties["padding"];
      bordeRadius: React.CSSProperties["borderRadius"];
      width: React.CSSProperties["width"];
      height: React.CSSProperties["height"];
      shadowR?: React.CSSProperties["boxShadow"];
      shadowL?: React.CSSProperties["boxShadow"];
      font: Keys;
    };
  }
}

type sizeMap<Value extends keyof React.CSSProperties> = {
  [key in sizes]?: React.CSSProperties[Value];
};

export type sizes =
  | "small"
  | "medium"
  | "portrait"
  | "large"
  | "xlarge"
  | (string & {});

type Keys = "primary" | "secondary" | "tertiary" | (string & {});
