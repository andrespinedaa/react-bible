import styled from "styled-components";
import { useBible } from "../../hooks/useBible";
import { useVersesContext } from "../@contexts";

interface ChapterNumberProps {
  ChapterNumber?: number;
  NumberBig?: boolean;
}

const StyledChapterNumber = styled.span<{ $NumberBig: boolean }>`
  font-size: ${({ $NumberBig }) =>
    $NumberBig ? "calc(2 * 1.5rem)" : "1.5rem"};
`;

function ChapterNumber({
  ChapterNumber,
  NumberBig = false,
}: ChapterNumberProps) {
  const { firstNumberBig } = useVersesContext();
  const { chapter } = useBible();
  const innerNumberBig = NumberBig || firstNumberBig;
  const innerChapterNumber = ChapterNumber || chapter.number;

  return (
    <StyledChapterNumber $NumberBig={innerNumberBig}>
      {innerChapterNumber}
    </StyledChapterNumber>
  );
}

export default ChapterNumber;
