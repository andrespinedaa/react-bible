import React from "react";
import styled from "styled-components";

interface DividerProps extends React.ComponentPropsWithRef<"span"> {
  children?: React.ReactNode;
  expresion?: string;
}
const StyledDivider = styled.span``;

function Divider({ expresion = ":", children, ...restProps }: DividerProps) {
  return <StyledDivider {...restProps}>{expresion}</StyledDivider>;
}

export default Divider;
