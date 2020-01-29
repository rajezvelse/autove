import React from "react";
import styled from "styled-components";

const AppHeader: React.FC = styled.header`
	background-color: ${props => props.theme.colorBg};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export default AppHeader;
