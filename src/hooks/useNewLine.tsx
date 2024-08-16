import _ from "lodash";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function useNewLine(text: string) {
	// Verifica si el texto contiene '\n'
	if (!text.includes("\n") && !text.includes("@")) return text; // Si no contiene '\n', retorna el texto original
	// Si contiene '\n', procede a dividir y formatear con <br />

	if (text.includes("@") && !text.includes("\n")) {
		return _.map(_.split(text, "@"), (line) => {
			return _.replace(line, "@", "(A)");
		});
	}

	return _.map(_.split(text, "\n"), (line) => {
		return (
			<React.Fragment key={uuidv4()}>
				{line}
				<br />
			</React.Fragment>
		);
	});
}

export default useNewLine;
