import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useVerseContext, VerseBodyProvider } from "../../@contexts";
import { paragraph } from "../../../utilities";

interface VerseBodyProps {
  verseSeparate?: boolean;
  paragraph?: paragraph;
  children?: React.ReactNode;
}

const StyledVerseBody = styled.span`
  display: inline;
`;

const StyledParagraph = styled.p<{ $verseSeparate: boolean }>`
  display: ${(props) => (props.$verseSeparate ? "flex" : "inline")};
  flex-direction: column;
`;

function VerseBody({
  children,
  verseSeparate = false,
  paragraph = undefined,
}: VerseBodyProps) {
  const { paragraph: paragraphFromVerse } = useVerseContext();
  const innerParagraph = paragraph ?? paragraphFromVerse;
  const refAt = React.useRef(0);

  return (
    <StyledParagraph $verseSeparate={verseSeparate}>
      {innerParagraph.verses.map((verse) => {
        return (
          <VerseBodyProvider value={{ verse, refAt }} key={uuidv4()}>
            <StyledVerseBody>{children}</StyledVerseBody>
          </VerseBodyProvider>
        );
      })}
    </StyledParagraph>
  );
}

export default VerseBody;
