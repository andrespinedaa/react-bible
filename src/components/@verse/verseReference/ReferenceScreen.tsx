import React from "react";
import styled from "styled-components";

interface ReferenceScreenProps {
	children?: React.ReactNode;
}

const StyledScreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: #f8f9fa;
`;

function ReferenceScreen({ children }: ReferenceScreenProps) {
	return <StyledScreen>{children}</StyledScreen>;
}

export default ReferenceScreen;
