import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import CarSection from "./carSection";
import Card from "./AirportSection";
import { Link } from "react-router-dom";

const ImgStyle = styled.img`
	width: 20rem;
	margin-top: 10rem;
`;

const HomeDiv = styled.div`
	margin-top: 10rem;

	text-align: -webkit-center;
`;

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Home() {
	const classes = useStyles();
	const [value, setValue] = React.useState("Controlled");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<Grid container spacing={3}>
				<Grid item sm={12}>
					<HomeDiv>
						<div>
							<h1>Request A Luxury Car Service</h1>
						</div>
						<Button
							component={Link}
							to="/login"
							type="address"
							style={{
								background: "black",
								color: "white",
								margin: "1.5rem 0.5rem",
							}}
						>
							Request
						</Button>{" "}
					</HomeDiv>
				</Grid>
			</Grid>

			<CarSection />

			<Card />
		</div>
	);
}
