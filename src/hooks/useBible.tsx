import React from "react";
import {
  BIBLE_ACTIONS,
  BIBLE_REDUCER,
  BIBLE_STATE,
} from "../components/@contexts";
import { bibleType, verse } from "../utilities";

type useBibleProps = {
  bible: bibleType;
};

type returnUseBible = {
  bibleGlobal: BIBLE_STATE;
  bibleDispatch: React.Dispatch<BIBLE_ACTIONS>;
};

export function useBible({ bible }: useBibleProps): returnUseBible {
  /* WE VALIDATE IF A BIBLE EXISTS */
  React.useEffect(() => {
    if (!bible) {
      throw new Error("BIBLE CONTEXT IS NOT SAFE");
    }
  }, [bible]);

  const INITIAL_STATE: BIBLE_STATE = {
    chapterNumber: bible.versions[0].testament[0].books[0].chapters[0].number,
    versions: bible.versions,
    chapter: bible.versions[0].testament[0].books[0].chapters[0],
    book: bible.versions[0].testament[0].books[0],
    paragraphs:
      bible.versions[0].testament[0].books[0].chapters[0].paragraphs || [],
    crossReferences:
      bible.versions[0].testament[0].books[0].chapters[0].crossReferences,
    firstVerse:
      bible.versions[0].testament[0].books[0].chapters[0].paragraphs[0]
        .verses[0],
    lastVerse: bible.versions[0].testament[0].books[0].chapters[0].paragraphs
      .at(-1)
      ?.verses.at(-1) as verse,
  };

  const [bibleGlobal, bibleDispatch] = React.useReducer(
    BIBLE_REDUCER,
    INITIAL_STATE,
  );

  return {
    bibleGlobal,
    bibleDispatch,
  };
}
