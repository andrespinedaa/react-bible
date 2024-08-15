import styled from "styled-components";

interface BibleFooterProps {
  children?: React.ReactNode;
}

const StyledBibleFooter = styled.footer`
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",z
  gap: "2.5%",
`;

function BibleFooter({ children }: BibleFooterProps) {
  return <StyledBibleFooter>{children}</StyledBibleFooter>;
}

export default BibleFooter;
