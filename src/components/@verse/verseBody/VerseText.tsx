import _ from "lodash";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useVersesContext } from "../../@contexts";
import { useOptionalVerseBodyContext } from "../../@contexts/VerseBodyContext"; // Import the VerseBodyContextType

interface VerseTextProps {
  text?: string;
  children?: React.ReactNode;
}

function VerseText({ text = undefined, children }: VerseTextProps) {
  const { psalmStyle = true } = useVersesContext();
  const verseOptional = useOptionalVerseBodyContext();
  const innerText = text ?? verseOptional?.verse.text ?? "Text not found";

  if (!innerText.includes("\n") && !innerText.includes("@")) return innerText;

  return _.map(
    _.split(innerText, "\n"),
    (lineBreak, idxLineBreak, lineaBreaks) => {
      return (
        <React.Fragment key={uuidv4()}>
          {_.map(_.split(lineBreak, "@"), (lineAt, idxLineAt, lineAtList) => {
            return (
              <React.Fragment key={uuidv4()}>
                {lineAt}
                {idxLineAt < lineAtList.length - 1 && children}
              </React.Fragment>
            );
          })}
          {idxLineBreak < lineaBreaks.length - 1 && psalmStyle && <br />}
        </React.Fragment>
      );
    },
  );
}

export default VerseText;
