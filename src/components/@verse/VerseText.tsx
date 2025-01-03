import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import {
  useOptionalVerseBodyContext,
  useOptionalVersesContext,
} from "../@contexts";
import { useCreateSafeContext } from "../../hooks";

interface VerseTextProps {
  text?: string;
  children?: React.ReactNode;
}

export const [
  VerseTextContext,
  useVerseTextContext,
  useOptionalVerseTextContext,
] = useCreateSafeContext<number>("VerseText is not safe!!!");

const JesusWords = styled.span`
  color: ${(props) =>
    props.theme.jesusWordsColor && props.theme.jesusWords
      ? props.theme.jesusWordsColor
      : props.theme.bibleColors.secondary};
`;

const StyledBreak = styled.br<{ $prophecy?: boolean }>`
  margin-bottom: ${(props) =>
    props.$prophecy ? "0" : props.theme.bibleVerses.spaceBetweenVerses};
  content: "";
  display: block;
`;

function VerseText({ text = undefined, children }: VerseTextProps) {
  const psalm = useOptionalVersesContext();
  const verseOptional = useOptionalVerseBodyContext();
  const innerText = text ?? verseOptional?.verse.text ?? "Text not found";

  if (
    !innerText.includes("\n") &&
    !innerText.includes("@") &&
    !innerText.includes("\r")
  ) {
    return innerText;
  }

  return _.map(
    _.split(innerText, "\n"),
    (lineBreak, idxLineBreak, lineaBreaks) => {
      return (
        <React.Fragment key={uuidv4()}>
          {_.map(_.split(lineBreak, "\r"), (fragment, idxFragment) => {
            const isJesusWords = idxFragment % 2 === 1;
            return (
              <React.Fragment key={uuidv4()}>
                {_.map(
                  _.split(fragment, "@"),
                  (lineAt, idxLineAt, lineAtList) => (
                    <React.Fragment key={uuidv4()}>
                      {isJesusWords ? (
                        <JesusWords>{lineAt}</JesusWords>
                      ) : (
                        lineAt
                      )}
                      {idxLineAt < lineAtList.length - 1 && (
                        <VerseTextContext value={idxLineAt}>
                          {children}
                        </VerseTextContext>
                      )}
                    </React.Fragment>
                  ),
                )}
              </React.Fragment>
            );
          })}
          {idxLineBreak < lineaBreaks.length - 1 && psalm?.psalmStyle && (
            <StyledBreak $prophecy={verseOptional?.verse.prophecy} />
          )}
        </React.Fragment>
      );
    },
  );
}

export default VerseText;
