import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useBibleContext, VerseProvider } from "../@contexts";
import VerseBody from "./VerseBody";
import VerseHeader from "./VerseHeader";
import VerseNumber from "./VerseNumber";
import VerseReference from "./VerseReference";
import VerseSubTitle from "./VerseSubTitle";
import VerseText from "./VerseText";
import VerseTitle from "./VerseTitle";

interface VerseProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}
const StyledVerse = styled.div`
  display: flex;
  flex-direction: column;
`;

function Verse({ children, ...restProps }: VerseProps) {
  const { bible, bibleDispatch } = useBibleContext();

  React.useEffect(() => {
    if (bible.paragraphs?.length > 0) {
      bibleDispatch({
        type: "SET_FIRST_VERSE",
        payload: _.first(_.first(bible.paragraphs)?.verses),
      });
      bibleDispatch({
        type: "SET_LAST_VERSE",
        payload: _.last(_.last(bible.paragraphs)?.verses),
      });
    }
  }, [bible.paragraphs, bibleDispatch]);

  return (
    <StyledVerse {...restProps}>
      {bible.paragraphs?.map((paragraph) => {
        return (
          <VerseProvider
            key={uuidv4()}
            value={{
              paragraph,
              subTitle: paragraph.subTitle,
              title: paragraph.title,
              sharedStories: paragraph.sharedStories,
            }}
          >
            {children}
          </VerseProvider>
        );
      })}
    </StyledVerse>
  );
}

export default Object.assign(Verse, {
  VerseBody: VerseBody,
  VerseHeader: VerseHeader,
  VerseText: VerseText,
  VerseNumber: VerseNumber,
  VerseTitle: VerseTitle,
  VerseSubTitle: VerseSubTitle,
  VerseReference: VerseReference,
});
