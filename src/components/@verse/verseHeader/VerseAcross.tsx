import styled from "styled-components";
import { useBible } from "../../../hooks/useBible";
import { useSafeId } from "../../../hooks/useSafeId";
import { Cite } from "../../@cite";

interface VerseAcrossProps {
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

function VerseAcross({ listType = "lower-alpha" }: VerseAcrossProps) {
  const {
    chapter: { AcrossVerses = [] },
  } = useBible();
  const uniquedId = useSafeId();

  return (
    <StyledVerseAcross $listType={`${listType}`}>
      {AcrossVerses.map((verse) => {
        return (
          <li key={uniquedId}>
            <Cite
              key={
                verse.bookName + verse.chapterNumber + verse.verseNumberStart
              }
              {...verse}
            />
          </li>
        );
      })}
    </StyledVerseAcross>
  );
}

export default VerseAcross;
