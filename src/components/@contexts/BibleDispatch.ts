import _ from "lodash";
import {
  book,
  chapter,
  lenguages,
  version,
  paragraph,
  linkedVerses,
  verse,
} from "../../utilities";
import { ChapterButtonSlice } from "./BibleActions";

export type BIBLE_STATE = {
  chapterNumber: number;
  lenguages?: lenguages;
  chapter: chapter;
  versions: version[];
  book: book;
  paragraphs: paragraph[];
  crossReferences: (linkedVerses | linkedVerses[])[];
  firstVerse: verse;
  lastVerse: verse;
};

type Action<T = string, P = any> = { type: T; payload?: P };

export type BIBLE_ACTIONS =
  /* ACTIONS CHAPTER */
  | Action<"NEXT_CHAPTER">
  | Action<"PREV_CHAPTER">
  | Action<"NAVI_CHAPTER", number>
  /* ACTIONS LANG */
  | Action<"CHANGE_LANG">
  /* ACTIONS VERSION */
  | Action<"SET_VERSION">
  /* ACTIONS VERSE */
  | Action<"SET_FIRST_VERSE", verse>
  | Action<"SET_LAST_VERSE", verse>;

export const INITIAL_STATE: BIBLE_STATE = {
  chapterNumber: 0,
  lenguages: ["en", "es"],
  chapter: {} as chapter,
  versions: [] as version[],
  book: {} as book,
  paragraphs: [] as paragraph[],
  crossReferences: [] as (linkedVerses | linkedVerses[])[],
  firstVerse: {} as verse,
  lastVerse: {} as verse,
};

export const BIBLE_REDUCER = (
  state: BIBLE_STATE,
  action: BIBLE_ACTIONS,
): BIBLE_STATE => {
  switch (action.type) {
    case "NEXT_CHAPTER":
      const nextChapter =
        state.book.chapters[state.chapter.number] ?? state.chapter;
      return ChapterButtonSlice(nextChapter, state);
    case "PREV_CHAPTER":
      const prevChapter =
        state.book.chapters[state.chapter.number - 2] ?? state.chapter;
      return ChapterButtonSlice(prevChapter, state);
    case "NAVI_CHAPTER":
      if (!action.payload) {
        return { ...state };
      }
      const exactChapter =
        state.book.chapters[action.payload - 1] ?? state.chapter;
      return ChapterButtonSlice(exactChapter, state);
    case "CHANGE_LANG":
      return { ...state };
    case "SET_VERSION":
      return { ...state };
    case "SET_FIRST_VERSE":
      if (!action.payload) {
        console.error("SET_FIRST_VERSE: Payload is undefined");
        return { ...state };
      }
      return { ...state, firstVerse: action.payload };
    case "SET_LAST_VERSE":
      if (!action.payload) {
        console.error("SET_LAST_VERSE: Payload is undefined");
        return { ...state };
      }
      return { ...state, lastVerse: action.payload };
    default:
      console.warn("Unhandled action type:", action);
      return { ...state };
  }
};
