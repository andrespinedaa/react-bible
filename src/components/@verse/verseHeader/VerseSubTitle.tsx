import styled from "styled-components";
import { useVerseContext } from "../../@contexts";

export interface VerseSubTitleProps {
  subTitleType?: "h4" | "h5" | "h6";
  subTitleFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
  subTitle?: string;
}

const StyledVerseSubTitle = styled.h4<{
  $subTitleFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
}>`
  margin: 0;
  color: ${(props) => props.theme.bibleColors.secondary};
  text-transform: ${(props) => props.$subTitleFormat};
`;

function VerseSubTitle({
  subTitle = undefined,
  subTitleType = "h4",
  subTitleFormat = "none",
}: VerseSubTitleProps) {
  const { subTitle: subTitleFromVerse } = useVerseContext();
  const innerSubTitle = subTitle || subTitleFromVerse;

  if (!innerSubTitle) return null;

  return (
    <StyledVerseSubTitle
      as={subTitleType}
      $subTitleFormat={`${subTitleFormat}`}
    >
      {innerSubTitle}
    </StyledVerseSubTitle>
  );
}

export default VerseSubTitle;
