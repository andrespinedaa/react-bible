import { spanishVersionsAbrevs, spanishVersionsNames } from "./versions";
export type all = "all";
export type both = "both";
export type lang = "es" | "en";
export type lenguages = lang[];
export type testamentsAbrevs = "OT" | "NT";

export type cite = {
  bookName: string;
  chapterNumber: number;
  verseNumberStart: number;
  verseNumberEnd?: number;
};
export type anchor = {
  verses: verse[];
  bookName: string;
  abrevBookName: string;
  chapterNumber: number;
};
export type verse = {
  text: string;
  number: number;
};
export type paragraph = {
  title?: string;
  subTitle?: string;
  verses: verse[];
};
export type chapter = {
  number: number;
  amountVerses: number;
  versesAcross: anchor[];
  paragraphs: paragraph[];
};
export type book = {
  abrev: string;
  name: string;
  amountChapters: number;
  amountVerses: number;
  testament: testamentsAbrevs;
  chapters: chapter[];
};
export type testament = {
  abrev: testamentsAbrevs;
  name: string;
  amountBooks: number;
  amountChapters: number;
  amountVerses: number;
  books: book[];
};
export type version = {
  abrev: spanishVersionsAbrevs;
  name: spanishVersionsNames;
  testament: testament[];
};
export type bible = {
  lenguages: lenguages;
  versions: version[];
};

export type letters = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "ñ";
export type lettersEnglish = Exclude<letters, "ñ">;
export type lettersSpanish = letters;
