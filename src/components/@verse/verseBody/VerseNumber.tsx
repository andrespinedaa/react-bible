import styled from "styled-components";
import {
  useOptionalVerseBodyContext
} from "../../@contexts";

interface VerseNumberProps extends React.ComponentPropsWithRef<"span"> {
  numberStyle?: "bold" | "italic" | "boldAndItalic" | "normal";
  numberType?: "sub" | "sup" | "span";
  firstNumberBig?: boolean;
  number?: number;
  children?: React.ReactNode;
}

const StyledVerseNumber = styled.span<{
  $numberStyle?: "bold" | "italic" | "boldAndItalic" | "normal";
  $firstNumberBig?: boolean;
  $number?: number;
  $psalmStyle?: boolean;
}>`
  position: ${(props) => (props.$psalmStyle ? "absolute" : "static")};
  left: ${(props) => (props.$psalmStyle ? "-25px" : "auto")};
  font-style: ${(props) =>
    props.$numberStyle === "boldAndItalic"
      ? "italic"
      : props.$numberStyle === "italic"
        ? "italic"
        : "normal"};
  font-weight: ${(props) =>
    props.$numberStyle === "boldAndItalic"
      ? "bold"
      : props.$numberStyle === "bold"
        ? "bold"
        : "normal"};
  font-size: ${(props) =>
    props.$number === 1 ? (props.$firstNumberBig ? "2rem" : "1rem") : "1rem"};
  margin: 0 ${(props) => props.theme.bibleVerses.spaceBetweenVerseAndNumber};
`;

function VerseNumber({
  firstNumberBig = false,
  numberStyle = "normal",
  numberType = "span",
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
        as={numberType}
        $numberStyle={`${numberStyle}`}
        $firstNumberBig={firstNumberBig}
        $number={innerNumber}
        {...restProps}
      >
        {innerNumber}
      </StyledVerseNumber>
    </>
  );
}

export default VerseNumber;
