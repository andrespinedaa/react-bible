import React from "react";
import styled from "styled-components";

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
	const handleMouseOver = () => setShow(!show);
	
	return (
		<StyledVerseReference
			onMouseOver={() => handleMouseOver()}
			onMouseOut={() => handleMouseOver()}
			$referenceFormat={`${referenceFormat}`}
		>
			(a)
			{show && <span>(name)</span>}
		</StyledVerseReference>
	);
}

export default VerseReference;
