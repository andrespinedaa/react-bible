import styled from "styled-components";
import { useVerseBodyContext, useVerseContext } from "../../@contexts";

export interface VerseTitleProps {
  titleFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
  titleType?: "h1" | "h2" | "h3";
  title?: string;
}

const StyledVerseTitle = styled.h1<{
  $titleFormat: "uppercase" | "lowercase" | "capitalize" | "none";
}>`
  text-transform: ${(props) => props.$titleFormat};
  color: ${(props) => props.theme.bibleColors.primary};
`;

function VerseTitle({
  title = undefined,
  titleType = "h3",
  titleFormat = "none",
}: VerseTitleProps) {
  const { title: titleFromVerse } = useVerseContext();
  const innerTitle = title ?? titleFromVerse;

  if (!innerTitle) return null;

  return (
    <StyledVerseTitle as={titleType} $titleFormat={`${titleFormat}`}>
      {innerTitle}
    </StyledVerseTitle>
  );
}

export default VerseTitle;
