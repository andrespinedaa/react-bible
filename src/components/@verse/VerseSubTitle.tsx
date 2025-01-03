import styled from "styled-components";
import { useOptionalVerseContext } from "../@contexts";
import { HeadingTags } from "../../utilities";
import React from "react";

export interface VerseSubTitleProps extends React.ComponentPropsWithRef<"h4"> {
  headingLevel?: HeadingTags;
  subTitleFormat?: React.CSSProperties["textTransform"];
  subTitle?: string;
}

const StyledVerseSubTitle = styled.h4<{
  $subTitleFormat?: React.CSSProperties["textTransform"];
}>`
  margin: 0;
  color: ${(props) => props.theme.bibleColors.secondary};
  text-transform: ${(props) => props.$subTitleFormat};
`;

function VerseSubTitle({
  subTitle = undefined,
  headingLevel = "h4",
  subTitleFormat = "none",
  ...restProps
}: VerseSubTitleProps) {
  const subTitleFromVerse = useOptionalVerseContext();
  const innerSubTitle = subTitle ?? subTitleFromVerse?.subTitle;

  if (!innerSubTitle) return null;

  return (
    <StyledVerseSubTitle
      as={headingLevel}
      $subTitleFormat={`${subTitleFormat}`}
      {...restProps}
    >
      {innerSubTitle}
    </StyledVerseSubTitle>
  );
}

export default VerseSubTitle;
