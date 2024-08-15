import styled from "styled-components";
import { useBible } from "../../hooks";

interface BookNameProps {
  bookName?: string;
}

const StyledBookName = styled.div``;

function BookName({ bookName }: BookNameProps) {
  const {
    book: { name },
  } = useBible();
  const innerBookName = bookName || name;

  return <StyledBookName>{innerBookName}</StyledBookName>;
}

export default BookName;
