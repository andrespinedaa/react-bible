import React from "react";
import styled from "styled-components";
import { paragraph } from "../../utilities";
import { useBibleContext, VersesProvider } from "../@contexts";

export interface VersesProps extends React.ComponentPropsWithRef<"div"> {
  textAlign?: React.CSSProperties["textAlign"];
  paragraphs?: paragraph[];
  separateParagraphs?: boolean;
  separateVerses?: boolean;
  psalmStyle?: boolean;
  children: React.ReactNode;
}

const StyledVerses = styled.div<{
  $textAlign?: React.CSSProperties["textAlign"];
  $separateParagraphs?: boolean;
}>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: ${(props) =>
    props.theme.bibleSizes.VerseTextSize[props.theme.defaultSize]};
  text-align: ${(props) => props.$textAlign};
  gap: ${(props) =>
    props.$separateParagraphs && props.theme.bibleVerses.spaceBetweenVerses};
`;

function Verses({
  separateParagraphs = true,
  separateVerses = false,
  paragraphs = undefined,
  psalmStyle = true,
  textAlign = "left",
  children,
  ...restProps
}: VersesProps) {
  const { bible } = useBibleContext();
  const innerParagraphs = paragraphs ?? bible.paragraphs;

  return (
    <StyledVerses
      $textAlign={textAlign}
      $separateParagraphs={separateParagraphs}
      {...restProps}
    >
      <VersesProvider
        value={{
          textAlign,
          psalmStyle,
          separateVerses,
          paragraphs: innerParagraphs,
        }}
      >
        {children}
      </VersesProvider>
    </StyledVerses>
  );
}

export default Verses;
