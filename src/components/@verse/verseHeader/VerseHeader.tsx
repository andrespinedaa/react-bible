import React from "react";
import styled from "styled-components";
import { useVerseContext } from "../../@contexts";

interface VerseHeaderProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
}

const StyledVerseHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${(props) => props.theme.bibleVerses.spaceBetweenTitleAndSubTitle};
`;

function VerseHeader({ children, ...restProps }: VerseHeaderProps) {
  const { subTitle, title } = useVerseContext();
  if (!title && !subTitle) return null;
  if (title && !subTitle) return children;
  return <StyledVerseHeader {...restProps}>{children}</StyledVerseHeader>;
}

export default VerseHeader;
