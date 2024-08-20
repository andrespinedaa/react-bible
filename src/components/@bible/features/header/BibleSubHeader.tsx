import styled from "styled-components";

interface BibleSubHeaderProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}

const StyledBibleSubHeader = styled.div``;

function BibleSubHeader({ children, ...restProps }: BibleSubHeaderProps) {
  return <StyledBibleSubHeader {...restProps}>{children}</StyledBibleSubHeader>;
}

export default BibleSubHeader;
