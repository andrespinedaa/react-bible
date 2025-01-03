import styled from "styled-components";

interface BibleHeaderProps extends React.ComponentPropsWithRef<"header"> {
  children?: React.ReactNode;
}

const StyledBibleHeader = styled.header`
  display: flex;
  align-items: baseline;
  gap: 5px;
  padding: 8px;
`;

function BibleHeader({ children, ...restProps }: BibleHeaderProps) {
  return <StyledBibleHeader {...restProps}>{children}</StyledBibleHeader>;
}

export default BibleHeader;
