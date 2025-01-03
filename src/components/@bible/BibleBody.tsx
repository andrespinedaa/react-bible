import React from "react";
import styled from "styled-components";

interface BibleBodyProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

const StyledBibleBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 45px;
  overflow: auto;
`;

function BibleBody({ children, ...restProps }: BibleBodyProps) {
  return <StyledBibleBody {...restProps}>{children}</StyledBibleBody>;
}

export default BibleBody;
