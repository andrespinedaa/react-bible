import React from "react";
import styled from "styled-components";
import { useBible } from "../../hooks/useBible";
import { paragraph } from "../../utilities";
import { VersesProvider } from "../@contexts";

export interface VersesProps extends React.ComponentPropsWithRef<"div"> {
  alignText?: "center" | "left" | "right";
  paragraphs?: paragraph[];
  separateParagraphs?: boolean;
  separateVerses?: boolean;
  psalmStyle?: boolean;
  children: React.ReactNode;
}

const StyledVerses = styled.div<{
  $alignText?: "center" | "left" | "right";
  $separateParagraphs?: boolean;
}>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: ${(props) =>
    props.theme.bibleSizes.VerseTextSize[props.theme.defaultSize]};
  text-align: ${(props) => props.$alignText};
  gap: ${(props) =>
    props.$separateParagraphs && props.theme.bibleVerses.spaceBetweenVerses};
`;

function Verses({
  separateParagraphs = true,
  separateVerses = false,
  paragraphs = undefined,
  psalmStyle = true,
  alignText = "left",
  children,
  ...restProps
}: VersesProps) {
  const { paragraphs: paragraphsAPI } = useBible();
  const innerParagraphs = paragraphs ?? paragraphsAPI;

  return (
    <StyledVerses
      $alignText={alignText}
      $separateParagraphs={separateParagraphs}
      {...restProps}
    >
      <VersesProvider
        value={{
          alignText,
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
