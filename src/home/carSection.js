import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const CarImg = styled.img`
	width: 15rem;
`;

const CarDiv = styled.div``;
const TextDiv = styled.div`
	margin-left: 2rem;
`;

const carSection = () => {
	return (
		<CarDiv>
			<Paper>
				<TextDiv>
					<Typography variant="h5">
						World class service in <br /> Budapest
					</Typography>
				</TextDiv>

				<Grid container spacing={3}>
					<Grid item sm={3}>
						<CarImg src="/sclass.png" alt="" />
					</Grid>
					<Grid item sm={3}>
						<CarImg src="/van.png" alt="" />
					</Grid>
					<Grid item sm={3}>
						<CarImg src="/mayback.png" alt="" />
					</Grid>
					<Grid item sm={3}>
						<CarImg src="/Capture.png" alt="" />
					</Grid>
				</Grid>
			</Paper>
		</CarDiv>
	);
};

export default carSection;
