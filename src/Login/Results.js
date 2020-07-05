import React from "react";
import styled from "styled-components";

const ResultDiv = styled.div`
	margin-top: 10rem;
`;

export const Results = (props) => {
	return (
		<ResultDiv>
			<h2>Thank you!</h2>
			<p>Expect a phone call from your Chauffer to confirm </p>
		</ResultDiv>
	);
};
export default Results;
