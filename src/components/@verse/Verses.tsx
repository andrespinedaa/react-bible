import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useBible } from "../../hooks/useBible";
import { paragraph } from "../../utilities";
import { VerseProvider, VersesProvider } from "../@contexts";

export interface VersesProps extends React.ComponentPropsWithRef<"div"> {
  firstNumberBig?: boolean;
  firstNumber?: "chapter" | "verse" | "chapterAndVerse";
  alignText?: "center" | "left" | "right";
  verses?: paragraph[];
  separateParagraphs?: boolean;
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
  verses = undefined,
  firstNumberBig = true,
  firstNumber = "chapter",
  alignText = "left",
  separateParagraphs = true,
  psalmStyle = true,
  children,
  ...restProps
}: VersesProps) {
  const { verses: versesFromBible } = useBible();
  const innerVerses = verses ?? versesFromBible;

  return (
    <VersesProvider
      value={{
        alignText,
        firstNumber,
        firstNumberBig,
        psalmStyle,
      }}
    >
      <StyledVerses
        $alignText={alignText}
        $separateParagraphs={separateParagraphs}
        {...restProps}
      >
        {innerVerses.map((paragraph) => {
          return (
            <VerseProvider
              value={{
                paragraph,
                subTitle: paragraph.subTitle,
                title: paragraph.title,
              }}
              key={uuidv4()}
            >
              {children}
            </VerseProvider>
          );
        })}
      </StyledVerses>
    </VersesProvider>
  );
}

export default Verses;
