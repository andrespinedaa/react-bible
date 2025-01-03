import React from "react";
import styled from "styled-components";
import { useBibleContext } from "../@contexts";

interface VerseToProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
  divider?: string;
  firstVerse?: number;
  lastVerse?: number;
}
const StyledVerseTo = styled.div``;

function VerseTo({
  divider = ":",
  children,
  firstVerse = undefined,
  lastVerse = undefined,
  ...restProps
}: VerseToProps) {
  const { bible } = useBibleContext();
  const innerFirstNumber = firstVerse ?? bible.firstVerse.number;
  const innerLastNumber = lastVerse ?? bible.lastVerse.number;

  return (
    <StyledVerseTo {...restProps}>
      {innerFirstNumber + divider + innerLastNumber}
    </StyledVerseTo>
  );
}

export default VerseTo;
