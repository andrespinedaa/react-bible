import React from "react";
import { useBibleContext } from "../components/@contexts";
import {
  paragraph,
  type book,
  type chapter,
  type testament,
  type version,
} from "../utilities";

type returnUseBible = {
  version: version;
  testament: testament;
  book: book;
  chapter: chapter;
  verses: paragraph[];
};

export function useBible(): returnUseBible {
  const { bible } = useBibleContext();
  const [version, setVersion] = React.useState<version>({} as version);
  const [testament, setTestament] = React.useState<testament>({} as testament);
  const [book, setBook] = React.useState<book>({} as book);
  const [chapter, setChapter] = React.useState<chapter>({} as chapter);
  const [verses, setVerses] = React.useState<paragraph[]>([]);

  const setter = React.useCallback(() => {
    setVersion(bible.versions[0]);
    setTestament(bible.versions[0].testament[0]);
    setBook(bible.versions[0].testament[0].books[0]);
    setChapter(bible.versions[0].testament[0].books[0].chapters[0]);
    setVerses(bible.versions[0].testament[0].books[0].chapters[0].verses);
  }, [bible]);

  React.useEffect(() => {
    if (!bible) throw new Error("Bible Context is not safe");
    setter();
  }, [bible]);

  return {
    version,
    book,
    chapter,
    testament,
    verses,
  };
}
