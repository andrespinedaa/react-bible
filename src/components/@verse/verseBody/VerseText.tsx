import _ from "lodash";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useVerseBodyContext, useVersesContext } from "../../@contexts";
import VerseReference from "../verseReference/VerseReference";

interface VerseTextProps {
	text?: string;
	children?: React.ReactElement<typeof VerseReference>;
}

function VerseText({ text = undefined, children }: VerseTextProps) {
	const { psalmStyle = true } = useVersesContext();
	const { verse } = useVerseBodyContext();
	const innerText = text ?? verse.text;

	if (!innerText.includes("\n") && !innerText.includes("@")) return innerText;

	return _.map(_.split(innerText, "\n"), (lineBreak, idxLineBreak, lineaBreaks) => {
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
	});
}

export default VerseText;
