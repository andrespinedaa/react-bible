import React from "react";
import styled from "styled-components";
import { useBibleContext } from "../@contexts";

interface ChapterButtonsProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
  chapterNum?: number;
  step: "NEXT_CHAPTER" | "PREV_CHAPTER" | "NAVI_CHAPTER";
}
const StyledChapterButtons = styled.div<{
  step: "NEXT_CHAPTER" | "PREV_CHAPTER" | "NAVI_CHAPTER";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%); /* Ajuste para asegurar que se centra */
  background-color: #fff;
  ${(props) =>
    props.step === "PREV_CHAPTER"
      ? `
      left: 0; /* Posición a la izquierda */
      transform: translate(-50%, -50%);
      box-shadow: 5px 0px 10px 2px rgba(0, 0 ,0, 0.3);
      `
      : props.step === "NEXT_CHAPTER"
        ? `
        right: 0; /* Posición a la derecha */
        transform: translate(50%, -50%);
        box-shadow: -5px 0px 10px 2px rgba(0, 0 ,0, 0.3);
        `
        : ""}
`;

function ChapterButtons({
  step = "NEXT_CHAPTER",
  chapterNum = undefined,
  children,
  ...restProps
}: ChapterButtonsProps) {
  const { bibleDispatch } = useBibleContext();
  const handleStep = () => {
    if (chapterNum) {
      bibleDispatch({ type: step, payload: chapterNum });
      return;
    }
    bibleDispatch({ type: step });
  };

  return (
    <StyledChapterButtons onClick={handleStep} {...restProps} step={`${step}`}>
      {children}
    </StyledChapterButtons>
  );
}

export default ChapterButtons;
