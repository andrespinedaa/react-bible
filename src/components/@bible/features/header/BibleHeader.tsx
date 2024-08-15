import styled from "styled-components";

interface BibleHeaderProps {
  children?: React.ReactNode;
}

const StyledBibleHeader = styled.header`
  display: flex;
  align-items: baseline;
  gap: 5px;
  padding: 8px;
`;

function BibleHeader({ children }: BibleHeaderProps) {
  return <StyledBibleHeader>{children}</StyledBibleHeader>;
}

export default BibleHeader;
