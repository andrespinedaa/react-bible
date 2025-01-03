import React from "react";
import styled from "styled-components";

interface ChapterInfoProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
}
const StyledChapterInfo = styled.div``;

function ChapterInfo({ children, ...restProps }: ChapterInfoProps) {
  return <StyledChapterInfo {...restProps}>{children}</StyledChapterInfo>;
}

export default ChapterInfo;
