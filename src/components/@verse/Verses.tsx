import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useBible } from "../../hooks/useBible";
import { paragraph } from "../../utilities";
import { VerseProvider, VersesProvider } from "../@contexts";

export interface VersesProps extends React.ComponentPropsWithRef<"div"> {
  firstNumberBig?: boolean;
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
  display: ${(props) => (props.$separateParagraphs ? "flex" : "inline")};
  flex-direction: column;
  flex-wrap: wrap;
  font-size: ${(props) =>
    props.theme.bibleSizes.VerseTextSize[props.theme.defaultSize]};
  text-align: ${(props) => props.$alignText};
  gap: ${(props) => props.theme.bibleVerses.spaceBetweenVerses};
`;

function Verses({
  paragraphs = undefined,
  firstNumberBig = true,
  alignText = "left",
  separateParagraphs = true,
  separateVerses = false,
  psalmStyle = true,
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
          firstNumberBig,
          psalmStyle,
          separateVerses,
        }}
      >
        {innerParagraphs.map((paragraph) => {
          return (
            <VerseProvider
              key={uuidv4()}
              value={{
                paragraph,
                subTitle: paragraph.subTitle,
                title: paragraph.title,
              }}
            >
              {children}
            </VerseProvider>
          );
        })}
      </VersesProvider>
    </StyledVerses>
  );
}

export default Verses;
