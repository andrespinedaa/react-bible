import React from "react";
import styled from "styled-components";
import { BodyProvider } from "../../../@contexts";

interface BibleBodyProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

const StyledBidleBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: auto;
`;

function BibleBody({ children, ...restProps }: BibleBodyProps) {
  return (
    <BodyProvider value={{}}>
      <StyledBidleBody {...restProps}>{children}</StyledBidleBody>
    </BodyProvider>
  );
}

export default BibleBody;
