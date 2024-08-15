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
export type verse = {
  text: string;
  number: number;
  jesusWords?: boolean;
  anchor?: verse;
};
export type paragraph = {
  title?: string;
  subTitle?: string;
  verses: verse[];
};
export type chapter = {
  title: string;
  number: number;
  amountVerses: number;
  verses: paragraph[];
  AcrossVerses: cite[];
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
