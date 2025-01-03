import React from "react";
import styled from "styled-components";
import { InlineTags } from "../../utilities";
import { useOptionalVerseBodyContext } from "../@contexts";
import { useVerseTextContext } from "./VerseText";

interface VerseReferenceProps {
  referenceFormat?: React.CSSProperties["textTransform"];
  referenceStyle?: React.CSSProperties["fontStyle"];
  referenceWeight?: React.CSSProperties["fontWeight"];
  referenceType?: "letter" | "number";
  inlineLevel?: InlineTags;
}
const StyledVerseReference = styled.span<{
  $referenceFormat?: React.CSSProperties["textTransform"];
  $referenceStyle?: React.CSSProperties["fontStyle"];
  $referenceWeight?: React.CSSProperties["fontWeight"];
}>`
  text-transform: ${(props) => props.$referenceFormat};
  font-style: ${(props) => props.$referenceStyle};
  font-weight: ${(props) => props.$referenceWeight};
`;

const numberToLetter = (num: number): string => {
  let result = "";
  while (num > 0) {
    num--;
    result = String.fromCharCode(65 + (num % 26)) + result;
    num = Math.floor(num / 26);
  }
  return result;
};

function VerseReference({
  referenceFormat = "lowercase",
  referenceType = "letter",
  referenceStyle = "normal",
  inlineLevel = "span",
}: VerseReferenceProps) {
  const ctx = useOptionalVerseBodyContext();
  const currentRef = useVerseTextContext();
  const references = ctx?.verse.references?.refs ?? [1];
  return (
    <StyledVerseReference
      as={inlineLevel}
      $referenceFormat={referenceFormat}
      $referenceStyle={referenceStyle}
    >
      {referenceType === "number"
        ? references[currentRef]
        : numberToLetter(references[currentRef])}
    </StyledVerseReference>
  );
}

export default VerseReference;
