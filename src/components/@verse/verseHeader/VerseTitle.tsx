import styled from "styled-components";
import { useOptionalVerseContext, useVerseContext } from "../../@contexts";

export interface VerseTitleProps extends React.ComponentPropsWithRef<"h1"> {
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
  ...restProps
}: VerseTitleProps) {
  const titleFromVerse = useOptionalVerseContext();
  const innerTitle = title ?? titleFromVerse?.title;

  if (!innerTitle) return null;

  return (
    <StyledVerseTitle
      as={titleType}
      $titleFormat={`${titleFormat}`}
      {...restProps}
    >
      {innerTitle}
    </StyledVerseTitle>
  );
}

export default VerseTitle;
