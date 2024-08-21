import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  useVerseContext,
  useVersesContext,
  VerseBodyProvider,
} from "../../@contexts";

interface VerseBodyProps extends React.ComponentPropsWithRef<"p"> {
  children?: React.ReactNode;
}

const StyledVerseBody = styled.span<{ $psalmStyle?: boolean }>`
  display: inline;
  position: ${(props) => (props.$psalmStyle ? "relative" : "static")};
  margin-left: ${(props) => (props.$psalmStyle ? "1rem" : "0")};
`;

const StyledParagraph = styled.p<{ $verseSeparate: boolean }>`
  display: ${(props) => (props.$verseSeparate ? "flex" : "inline")};
  flex-direction: column;
  margin: 0;
`;

function VerseBody({ children, ...restProps }: VerseBodyProps) {
  const { paragraph } = useVerseContext();
  const { separateVerses = false } = useVersesContext();

  return (
    <StyledParagraph $verseSeparate={separateVerses} {...restProps}>
      {paragraph.verses.map((verse) => {
        return (
          <StyledVerseBody key={uuidv4()}>
            <VerseBodyProvider value={{ verse }}>
              {children}
            </VerseBodyProvider>
          </StyledVerseBody>
        );
      })}
    </StyledParagraph>
  );
}

export default VerseBody;
