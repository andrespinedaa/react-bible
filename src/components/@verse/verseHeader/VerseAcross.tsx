import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useBible } from "../../../hooks/useBible";

interface VerseAcrossProps extends React.ComponentPropsWithRef<"ul"> {
  listType?:
    | "lower-alpha"
    | "lower-roman"
    | "upper-alpha"
    | "upper-roman"
    | "none"
    | "disc"
    | "circle"
    | "square";
}

const StyledVerseAcross = styled.ul<{
  $listType:
    | "lower-alpha"
    | "lower-roman"
    | "upper-alpha"
    | "upper-roman"
    | "none"
    | "disc"
    | "circle"
    | "square";
}>`
  list-style-type: ${(props) => props.$listType};
`;

function VerseAcross({
  listType = "lower-alpha",
  ...restProps
}: VerseAcrossProps) {
  const {
    chapter: { versesAcross = [] },
  } = useBible();

  return (
    <StyledVerseAcross $listType={`${listType}`} {...restProps}>
      {versesAcross.map((verse) => {
        return (
          <li key={uuidv4()}>
            {verse.bookName} {verse.chapterNumber}
          </li>
        );
      })}
    </StyledVerseAcross>
  );
}

export default VerseAcross;
