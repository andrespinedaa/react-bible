import _ from "lodash";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import VerseReference from "../components/@verse/verseBody/VerseReference";

function useNewLine(text: string) {
  // Verifica si el texto contiene '\n'
  if (!text.includes("\n") && !text.includes("@")) return text; // Si no contiene '\n', retorna el texto original
  // Si contiene '\n', procede a dividir y formatear con <br />
  return _.map(_.split(text, "\n"), (line, index) => {
    console.log(text);
    return (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    );
  });
}

export default useNewLine;
