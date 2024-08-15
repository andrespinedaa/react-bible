import styled from "styled-components";
import { useBible } from "../../../hooks";

interface VerseReferenceProps {
  referenceFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
  referenceIndex: number;
}
const StyledVerseReference = styled.span<{
  $referenceFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
}>`
  text-transform: ${(props) => props.$referenceFormat};
`;

function VerseReference({
  referenceFormat = "none",
  referenceIndex = 0,
}: VerseReferenceProps) {
  const {
    chapter: { AcrossVerses },
  } = useBible();

  if (!AcrossVerses || !AcrossVerses[referenceIndex]) {
    console.error("Invalid referenceIndex or AcrossVerses is undefined");
    return null; // O puedes retornar un mensaje de error o un componente de fallback
  }

  return (
    <StyledVerseReference $referenceFormat={`${referenceFormat}`}>
      {AcrossVerses[referenceIndex].bookName}
    </StyledVerseReference>
  );
}

export default VerseReference;
