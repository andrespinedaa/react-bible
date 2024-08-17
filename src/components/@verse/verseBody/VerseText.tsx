import _ from "lodash";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useVerseBodyContext } from "../../@contexts";
import VerseReference from "../verseReference/VerseReference";

/* HACER UN REGEX PARA CAPTURAR LAS PALARBAS DE JESUS */

interface VerseTextProps {
	text?: string;
	jesusWords?: boolean;
	children?: React.ReactElement<typeof VerseReference>;
}

function VerseText({ text = undefined, children }: VerseTextProps) {
	const { verse } = useVerseBodyContext();
	const innerText = text ?? verse.text;

	if (!innerText.includes("\n") && !innerText.includes("@")) return innerText;

	return _.map(_.split(verse.text, "\n"), (jumpLine, _index2, partList) => {
		return (
			<React.Fragment key={uuidv4()}>
				{_.map(_.split(jumpLine, "@"), (lineAt, index, partsLineAt) => {
					return (
						<React.Fragment key={uuidv4()}>
							{lineAt}
							{index < partsLineAt.length - 1 && children}
						</React.Fragment>
					);
				})}
				{partList.length > 1 && <br />}
			</React.Fragment>
		);
	});
}

export default VerseText;
