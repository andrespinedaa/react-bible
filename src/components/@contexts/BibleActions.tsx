import _ from "lodash";
import { chapter, verse } from "../../utilities";
import { BIBLE_STATE } from "./BibleDispatch";

export const ChapterButtonSlice = (
  chapter: chapter,
  state: BIBLE_STATE,
): BIBLE_STATE => {
  return {
    ...state,
    chapterNumber: chapter.number,
    chapter: chapter,
    paragraphs: chapter.paragraphs, // Actualiza los versículos del siguiente capítulo
    crossReferences: chapter.crossReferences, // Actualiza las referencias cruzadas
    firstVerse: chapter.paragraphs[0]?.verses[0] ?? ({} as verse), // Establece el primer versículo
    lastVerse:
      _.last(_.last(chapter.paragraphs)?.verses ?? []) ?? ({} as verse), // Establece el último versículo
  };
};
