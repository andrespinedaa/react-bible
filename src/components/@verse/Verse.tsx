import React from "react";
import styled from "styled-components";
import { useVersesContext, VerseProvider } from "../@contexts";
import { v4 as uuidv4 } from "uuid";
import { VerseBody, VerseNumber, VerseText } from "./verseBody";
import { VerseHeader, VerseSubTitle, VerseTitle } from "./verseHeader";
import { VerseReference } from "./verseReference";

interface VerseProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}
const StyledVerse = styled.div`
  display: flex;
  flex-direction: column;
`;

function Verse({ children, ...restProps }: VerseProps) {
  const { paragraphs } = useVersesContext();
  const refAt = React.useRef<number | undefined>(undefined);

  return (
    <StyledVerse {...restProps}>
      {paragraphs.map((paragraph) => {
        return (
          <VerseProvider
            key={uuidv4()}
            value={{
              refAt,
              paragraph,
              subTitle: paragraph.subTitle,
              title: paragraph.title,
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
