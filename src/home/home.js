import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Container } from "@material-ui/core";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import CarSection from "./carSection";
import Card from "./AirportSection";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ImgStyle = styled.img`
	width: 100%;
	height: 100vh;
`;

const TextDiv = styled.div`
	text-align: center;

	margin-top: 8rem;
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
			<Navbar position="static" />

			<Grid container spacing={3}>
				<Grid item sm={6}>
					<TextDiv>
						<h1>Request A Luxury Car Service</h1>
						<Button
							component={Link}
							to="/login"
							type="address"
							style={{
								background: "#1EBECA",
								color: "white",
								margin: "1.5rem 0.5rem",
							}}
						>
							Request
						</Button>{" "}
					</TextDiv>
				</Grid>
				<Grid item sm={6}>
					<ImgStyle src="/letsgo.png" alt="" />
				</Grid>
			</Grid>

			<CarSection />

			<Card />
		</div>
	);
}
