import React from "react";
import styled from "styled-components";
import { useBibleContext } from "../@contexts";

interface BookNameProps extends React.ComponentPropsWithRef<"span"> {
  children?: React.ReactNode;
  bookName?: string;
}
const StyledBookName = styled.span``;

function BookName({
  bookName = undefined,
  children,
  ...restProps
}: BookNameProps) {
  const { bible } = useBibleContext();
  const innerBookName = bookName ?? bible.book.name;

  return <StyledBookName {...restProps}>{innerBookName}</StyledBookName>;
}

export default BookName;
