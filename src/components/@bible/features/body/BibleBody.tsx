import React from "react";
import styled from "styled-components";
import { BodyProvider } from "../../../@contexts";
import { Verses } from "../../../@verse";

interface BibleBodyProps {
  children: React.ReactElement<typeof Verses>[] | React.ReactElement<typeof Verses>;
}

const StyledBidleBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: auto;
`;

function BibleBody({ children }: BibleBodyProps) {
  return (
    <BodyProvider value={{}}>
      <StyledBidleBody>{children}</StyledBidleBody>
    </BodyProvider>
  );
}

export default BibleBody;
