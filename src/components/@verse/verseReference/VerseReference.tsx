import React from "react";
import styled from "styled-components";

interface VerseReferenceProps {
	referenceFormat?: "uppercase" | "lowercase";
	referenceType?: "letter" | "number" | "romanNumber";
	hookTagsType?: "parenthesis" | "brackets" | "none";
	hookType?: "span" | "sup" | "sub";
}
const StyledVerseReference = styled.span<{
	$referenceFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
}>`
	text-transform: ${(props) => props.$referenceFormat};
`;
const StyledHook = styled.span``;

function VerseReference({
	referenceFormat = "uppercase",
	hookTagsType = "parenthesis",
	hookType = "span",
}: VerseReferenceProps) {
	const [show, setShow] = React.useState<boolean>(false);
	const handleMouseOver = () => setShow(true);

	return (
		<StyledVerseReference
			onMouseOver={() => handleMouseOver()}
			$referenceFormat={`${referenceFormat}`}
		>
			<StyledHook as={hookType}>
				{hookTagsType === "parenthesis"
					? "(a)"
					: hookTagsType === "brackets"
						? "[a]"
						: hookTagsType === "none" && "a"}
			</StyledHook>
			{show && <span></span>}
		</StyledVerseReference>
	);
}

export default VerseReference;
