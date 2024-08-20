import styled from "styled-components";
import { useVerseBodyContext, useVersesContext } from "../../@contexts";

interface VerseNumberProps extends React.ComponentPropsWithRef<"span"> {
  numberStyle?: "bold" | "italic" | "boldAndItalic" | "normal";
  numberType?: "sub" | "sup" | "span";
  numberBig?: boolean;
  number?: number;
}

const StyledVerseNumber = styled.span<{
  $numberStyle?: "bold" | "italic" | "boldAndItalic" | "normal";
  $numberBig?: boolean;
  $number?: number;
}>`
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
    props.$number === 1 ? (props.$numberBig ? "2rem" : "1rem") : "1rem"};
  margin: 0 ${(props) => props.theme.bibleVerses.spaceBetweenVerseAndNumber};
`;

function VerseNumber({
  numberType = "span",
  numberStyle = "normal",
  numberBig = false,
  number = undefined,
  ...restProps
}: VerseNumberProps) {
  const { firstNumberBig } = useVersesContext();
  const { verse } = useVerseBodyContext();
  const innerNumber = verse.number ?? number;
  const innerNumberBig = numberBig ?? firstNumberBig;

  return (
    <StyledVerseNumber
      as={numberType}
      $numberStyle={`${numberStyle}`}
      $numberBig={innerNumberBig}
      $number={innerNumber}
      {...restProps}
    >
      {innerNumber}
    </StyledVerseNumber>
  );
}

export default VerseNumber;
