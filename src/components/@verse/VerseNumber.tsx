import React from "react";
import styled from "styled-components";
import { useOptionalVerseBodyContext } from "../@contexts";
import { InlineTags } from "../../utilities";

interface VerseNumberProps extends React.ComponentPropsWithRef<"span"> {
  numberStyle?: React.CSSProperties["fontStyle"];
  numberWeight?: React.CSSProperties["fontWeight"];
  inlineLevel?: InlineTags;
  firstNumberBig?: boolean;
  number?: number;
  children?: React.ReactNode;
}

const StyledVerseNumber = styled.span<{
  $numberStyle?: React.CSSProperties["fontStyle"];
  $numberWeight?: React.CSSProperties["fontWeight"];
  $firstNumberBig?: boolean;
  $number?: number;
  $psalmStyle?: boolean;
}>`
  position: ${(props) => (props.$psalmStyle ? "absolute" : "static")};
  left: ${(props) => (props.$psalmStyle ? "-25px" : "auto")};
  font-style: ${(props) => props.$numberStyle};
  font-weight: ${(props) => props.$numberWeight};
  font-size: ${(props) =>
    props.$number === 1 ? (props.$firstNumberBig ? "2rem" : "1rem") : "1rem"};
  margin: 0 ${(props) => props.theme.bibleVerses.spaceBetweenVerseAndNumber};
`;

function VerseNumber({
  firstNumberBig = false,
  numberStyle = "normal",
  numberWeight = "bold",
  inlineLevel = "span",
  number = undefined,
  children,
  ...restProps
}: VerseNumberProps) {
  const verseOptional = useOptionalVerseBodyContext();
  const innerNumber = number ?? verseOptional?.verse.number ?? 0;

  return (
    <>
      {innerNumber === 1 && children}
      <StyledVerseNumber
        as={inlineLevel}
        $number={innerNumber}
        $numberStyle={`${numberStyle}`}
        $numberWeight={`${numberWeight}`}
        $firstNumberBig={firstNumberBig}
        {...restProps}
      >
        {innerNumber}
      </StyledVerseNumber>
    </>
  );
}

export default VerseNumber;
