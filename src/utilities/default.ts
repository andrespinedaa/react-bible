export type all = "all";
export type both = "both";
export type lang = string;
export type lenguages = lang[];
export type testamentsAbrevs = "OT" | "NT";

export type linkedVerses = {
  bookName: string;
  abrevBookName: string;
  chapterNumber: number;
  verseNumberStart: number;
  verseNumberFinish?: number;
};
export type reference = {
  dictionary?: string;
  refs?: number[];
};

export type verse = {
  text: string;
  number: number;
  references?: reference;
  prophecy?: boolean;
};
export type paragraph = {
  title?: string;
  subTitle?: string;
  sharedStories?: linkedVerses[];
  verses: verse[];
};
export type chapter = {
  number: number;
  amountVerses: number;
  crossReferences: (linkedVerses | linkedVerses[])[];
  paragraphs: paragraph[];
};
export type book = {
  abrev: string;
  name: string;
  amountChapters: number;
  amountVerses: number;
  bookTestament: string;
  chapters: chapter[];
};
export type testament = {
  abrev: string;
  name: string;
  amountBooks: number;
  amountChapters: number;
  amountVerses: number;
  books: book[];
};
export type version = {
  abrev: string;
  name: string;
  testament: testament[];
};
export type bible = {
  lenguages: lenguages;
  versions: version[];
};

export type bibleType = {
  lenguages: lang[];
  versions: version[];
};
