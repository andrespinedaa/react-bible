import styled from "styled-components";
import { useVerseBodyContext } from "../../@contexts";

interface VerseReferenceProps {
  referenceFormat?: "uppercase" | "lowercase";
  referenceType?: "letter" | "number" | "romanNumber";
  hookTagsType?: "parenthesis" | "brackets" | "none";
  hookType?: "span" | "sup" | "sub";
}
const StyledVerseReference = styled.span<{
  $referenceFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
}>`
  text-transform: ${(props) => props.$referenceFormat};
`;
const StyledHook = styled.span``;

const numberToLetter = (num: number) => {
  return String.fromCharCode(65 + (num % 26));
};

function VerseReference({
  referenceFormat = "lowercase",
  hookTagsType = "parenthesis",
  referenceType = "letter",
  hookType = "span",
}: VerseReferenceProps) {
  const { refAt } = useVerseBodyContext();
  return (
    <StyledVerseReference $referenceFormat={`${referenceFormat}`}>
      <StyledHook as={hookType}>
        {hookTagsType === "parenthesis"
          ? `(${referenceType === "number" ? refAt.current : referenceType === "letter" && numberToLetter(refAt.current)})`
          : hookTagsType === "brackets"
            ? `[${referenceType === "number" ? refAt.current : referenceType === "letter" && numberToLetter(refAt.current)}}]`
            : hookTagsType === "none" && "a"}
      </StyledHook>
    </StyledVerseReference>
  );
}

export default VerseReference;
