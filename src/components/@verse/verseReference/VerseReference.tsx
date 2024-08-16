import React from "react";
import styled from "styled-components";
import ReferenceScreen from "./ReferenceScreen";

interface VerseReferenceProps {
	referenceFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
}
const StyledVerseReference = styled.span<{
	$referenceFormat?: "uppercase" | "lowercase" | "capitalize" | "none";
}>`
	text-transform: ${(props) => props.$referenceFormat};
`;

function VerseReference({ referenceFormat = "none" }: VerseReferenceProps) {
	const [show, setShow] = React.useState<boolean>(false);
	const handleMouseOver = () => setShow(true);

	return (
		<StyledVerseReference
			onMouseOver={() => handleMouseOver()}
			$referenceFormat={`${referenceFormat}`}
		>
			{show && <ReferenceScreen />}
		</StyledVerseReference>
	);
}

export default VerseReference;
