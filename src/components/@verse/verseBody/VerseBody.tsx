import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useVerseContext, VerseBodyProvider } from "../../@contexts";
import VerseNumber from "./VerseNumber";
import VerseText from "./VerseText";

interface VerseBodyProps {
  verseSeparate?: boolean;
  children:
    | React.ReactElement<typeof VerseText | typeof VerseNumber>
    | React.ReactElement<typeof VerseText | typeof VerseNumber>[];
}

const StyledVerseBody = styled.span`
  display: inline;
`;

const StyledParagraph = styled.p<{ $verseSeparate: boolean }>`
  display: ${(props) => (props.$verseSeparate ? "flex" : "inline")};
  flex-direction: column;
`;

function VerseBody({ children, verseSeparate = false }: VerseBodyProps) {
  const { paragraph } = useVerseContext();

  return (
    <StyledParagraph $verseSeparate={verseSeparate}>
      {paragraph.verses.map((verse) => {
        return (
          <VerseBodyProvider value={{ verse }} key={uuidv4()}>
            <StyledVerseBody>{children}</StyledVerseBody>
          </VerseBodyProvider>
        );
      })}
    </StyledParagraph>
  );
}

export default VerseBody;
