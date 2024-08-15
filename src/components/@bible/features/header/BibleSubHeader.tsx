import styled from "styled-components";

interface BibleSubHeaderProps {
  children?: React.ReactNode;
}

const StyledBibleSubHeader = styled.div``;

function BibleSubHeader({children}: BibleSubHeaderProps) {
  return <StyledBibleSubHeader>{children}</StyledBibleSubHeader>;
}

export default BibleSubHeader;
