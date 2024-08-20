import styled from "styled-components";
import { useVerseBodyContext } from "../../@contexts";

interface VerseReferenceProps {
  referenceFormat?: "uppercase" | "lowercase";
  referenceStyle?: "bold" | "italic" | "underline" | "none";
  referenceType?: "letter" | "number";
  hookTagsType?: "parenthesis" | "brackets" | "none";
  hookType?: "span" | "sup" | "sub";
}
const StyledVerseReference = styled.span<{
  $referenceFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
}>`
  text-transform: ${(props) => props.$referenceFormat};
`;

const StyledHook = styled.span<{
  $referenceStyle?: "bold" | "italic" | "boldAndItalic" | "underline" | "none";
}>`
  font-style: ${(props) =>
    props.$referenceStyle === "boldAndItalic"
      ? "italic"
      : props.$referenceStyle === "italic"
        ? "italic"
        : "normal"};
  font-weight: ${(props) =>
    props.$referenceStyle === "boldAndItalic"
      ? "bold"
      : props.$referenceStyle === "bold"
        ? "bold"
        : "normal"};
`;

const numberToLetter = (num: number) => {
  return String.fromCharCode(65 + (num % 26));
};

function VerseReference({
  referenceFormat = "lowercase",
  referenceType = "letter",
  referenceStyle = "none",
  hookTagsType = "parenthesis",
  hookType = "span",
}: VerseReferenceProps) {
  const { refAt } = useVerseBodyContext();
  if (refAt.current === undefined) {
    refAt.current = 0;
  } else {
    refAt.current++;
  }

  return (
    <StyledVerseReference $referenceFormat={`${referenceFormat}`}>
      <StyledHook as={hookType} $referenceStyle={`${referenceStyle}`}>
        {hookTagsType === "parenthesis"
          ? "("
          : hookTagsType === "brackets"
            ? "["
            : ""}
        {referenceType === "number"
          ? refAt.current + 1
          : referenceType === "letter" && numberToLetter(refAt.current)}
        {hookTagsType === "parenthesis"
          ? ")"
          : hookTagsType === "brackets"
            ? "]"
            : ""}
      </StyledHook>
    </StyledVerseReference>
  );
}

export default VerseReference;
