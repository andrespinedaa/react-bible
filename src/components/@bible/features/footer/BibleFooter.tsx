import styled from "styled-components";

interface BibleFooterProps extends React.ComponentPropsWithRef<"footer"> {
  children?: React.ReactNode;
}

const StyledBibleFooter = styled.footer`
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",z
  gap: "2.5%",
`;

function BibleFooter({ children, ...restProps }: BibleFooterProps) {
  return <StyledBibleFooter {...restProps}>{children}</StyledBibleFooter>;
}

export default BibleFooter;
