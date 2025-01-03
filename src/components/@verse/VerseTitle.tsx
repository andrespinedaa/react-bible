import React from "react";
import styled from "styled-components";
import { useOptionalVerseContext } from "../@contexts";
import { HeadingTags } from "../../utilities";

export interface VerseTitleProps extends React.ComponentPropsWithRef<"h1"> {
  titleFormat?: React.CSSProperties["textTransform"];
  headingLevel?: HeadingTags;
  title?: string;
}

const StyledVerseTitle = styled.h1<{
  $titleFormat: React.CSSProperties["textTransform"];
}>`
  text-transform: ${(props) => props.$titleFormat};
  color: ${(props) => props.theme.bibleColors.primary};
`;

function VerseTitle({
  title = undefined,
  headingLevel = "h2",
  titleFormat = "none",
  ...restProps
}: VerseTitleProps) {
  const titleFromVerse = useOptionalVerseContext();
  const innerTitle = title ?? titleFromVerse?.title;

  if (!innerTitle) return null;

  return (
    <StyledVerseTitle
      as={headingLevel}
      $titleFormat={`${titleFormat}`}
      {...restProps}
    >
      {innerTitle}
    </StyledVerseTitle>
  );
}

export default VerseTitle;
