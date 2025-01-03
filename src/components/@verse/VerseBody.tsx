import React from "react";
import styled from "styled-components";
import {
  useBibleContext,
  useVerseContext,
  useVersesContext,
  VerseBodyProvider,
} from "../@contexts";

interface VerseBodyProps extends React.ComponentPropsWithRef<"p"> {
  children?: React.ReactNode;
}

const StyledVerseBody = styled.span<{
  $psalmStyle?: boolean;
  $prophecy?: boolean;
}>`
  display: ${(props) => (props.$prophecy ? "inline-block" : "inline")};
  position: ${(props) => (props.$psalmStyle ? "relative" : "static")};
  background-color: ${(props) =>
    props.$prophecy && props.theme.prophecy.colorBg};
  padding: ${(props) => props.$prophecy && props.theme.prophecy.padding};
  border-radius: ${(props) =>
    props.$prophecy && props.theme.prophecy.bordeRadius};
  margin-left: ${(props) =>
    props.$psalmStyle || props.$prophecy
      ? props.theme.bibleVerses.spacePsalmAndProphecy
      : 0};
  margin-right: ${(props) =>
    props.$psalmStyle || props.$prophecy
      ? props.theme.bibleVerses.spacePsalmAndProphecy
      : 0};
  margin-top: ${(props) =>
    props.theme.bibleVerses.spaceBetweenProphecyAndVerse};
  margin-bottom: ${(props) =>
    props.theme.bibleVerses.spaceBetweenProphecyAndVerse};
`;

const StyledParagraph = styled.p<{ $verseSeparate: boolean }>`
  display: ${(props) => (props.$verseSeparate ? "flex" : "inline")};
  flex-direction: column;
  margin-bottom: ${(props) =>
    props.theme.bibleVerses.spaceBetweenVersesAndTitle};
  margin-top: ${(props) => props.theme.bibleVerses.spaceBetweenVersesAndTitle};
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

function VerseBody({ children, ...restProps }: VerseBodyProps) {
  const { paragraph } = useVerseContext();
  const { separateVerses = false } = useVersesContext();
  const { bible } = useBibleContext();

  return (
    <StyledParagraph $verseSeparate={separateVerses} {...restProps}>
      {paragraph.verses.map((verse) => {
        return (
          <React.Fragment
            key={verse.number + bible.chapterNumber + bible.book.name}
          >
            {verse.prophecy && <br />}
            <StyledVerseBody $prophecy={verse.prophecy}>
              <VerseBodyProvider value={{ verse }}>
                {children}
              </VerseBodyProvider>
            </StyledVerseBody>
            {verse.prophecy && <br />}
          </React.Fragment>
        );
      })}
    </StyledParagraph>
  );
}

export default VerseBody;
