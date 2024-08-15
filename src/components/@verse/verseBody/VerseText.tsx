import { useNewLine } from "../../../hooks";
import { useVerseBodyContext, useVersesContext } from "../../@contexts";

/* HACER UN REGEX PARA CAPTURAR LAS PALARBAS DE JESUS */

interface VerseTextProps {
  text?: string;
  jesusWords?: boolean;
}

function VerseText({ text = undefined }: VerseTextProps) {
  const { psalmStyle } = useVersesContext();
  const { verse } = useVerseBodyContext();
  const innerText = text ?? verse.text;
  const textRender = psalmStyle ? useNewLine(innerText) : innerText;

  return textRender;
}

export default VerseText;
