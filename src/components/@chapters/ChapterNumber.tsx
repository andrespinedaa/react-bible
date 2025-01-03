import React from "react";
import styled from "styled-components";
import { useBibleContext } from "../@contexts";

interface ChapterNumberProps {
  chapterNumber?: number;
  numberSize?: React.CSSProperties["fontSize"];
}

const StyledChapterNumber = styled.span<{
  $numberSize: React.CSSProperties["fontSize"];
}>`
  font-size: ${({ $numberSize }) => $numberSize};
`;

function ChapterNumber({
  chapterNumber,
  numberSize = "1em",
}: ChapterNumberProps) {
  const { bible } = useBibleContext();
  const innerChapterNumber = chapterNumber ?? bible.chapter.number;

  return (
    <StyledChapterNumber $numberSize={numberSize}>
      {innerChapterNumber}
    </StyledChapterNumber>
  );
}

export default ChapterNumber;
