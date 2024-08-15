export type BibleThemeModel = {
  /* Option for return the component without styles */
  unstyled: boolean;
  /* Default size for all */
  defaultSize: sizes;
  /* The colors for text, headgraphs, Jesus' words, etc */
  bibleColors: {
    [Key in Keys]?: string;
  };

  jesusWordsColor?: string;
  /* The fonts for text, titles, subtitles, numbers, etc*/
  bibleFonts: {
    [Key in Keys]?: string;
  };
  /* The size for the bible, spaces between verses, titles, numbers, etc*/
  bibleSizes: {
    bibleWidth: sizeMap;
    bibleHeight: sizeMap;
    VerseTextSize: sizeMap;
    VerseTitleSize: sizeMap;
    VerseNumberSize: sizeMap;
  };
  /* The size and color for the titles */
  bibleHeading: {
    font: Keys;
    color: Keys;
  };
  /* The size and color for the verses */
  bibleVerses: {
    color: Keys;
    font: Keys;
    spaceBetweenVerses: value;
    spaceBetweenVerseAndNumber: value;
    spaceBetweenVersesAndTitle: value;
    spaceBetweenTitleAndSubTitle: value;
  };
};

type sizeMap = {
  [key in sizes]?: value;
};

export type sizes =
  | "small"
  | "medium"
  | "portrait"
  | "large"
  | "xlarge"
  | (string & {});

type Keys = "primary" | "secondary" | "tertiary" | (string & {});

type unitValues =
  | "cm"
  | "mm"
  | "in"
  | "px"
  | "pt"
  | "pc"
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "%";

export type value = `${number}${unitValues}`;