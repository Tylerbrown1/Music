import React from "react";
import { Link } from "react-router-dom";
import data from "./carData";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FilterBar from "./filterBar";

//css styles
const CarsUl = styled.ul`
	list-style: none;
	margin: 5rem;
`;

const CarsImg = styled.img`
	width: 20rem;
`;

const myStyles = makeStyles((theme) => ({
	RequestButton: {
		backgroundColor: "#000",
		color: "#FFFFFF",
		paddingRight: "12px",
		paddingLeft: "12px",
		borderBottomLeftRadius: "30px",
		borderTopLeftRadius: "30px",
		borderBottomRightRadius: "30px",
		borderTopRightRadius: "30px",
		paddingBottom: "10px",
		paddingTop: "10px",
		lineHeight: "16px",
		fontWeight: 500,
		fontSize: "14px",
		cursor: "pointer",
		transitionProperty: "background",
		WebkitAppearance: "none",
		boxShadow: "none",
		borderStyle: "none",
	},
}));

function CarHomeScreen(props) {
	const classes = myStyles();
	return (
		<CarsUl className="cars">
			<h2>Choose a ride</h2>
			{data.cars.map((car) => (
				<li>
					<div className="cars">
						<Link to={"/results/" + car._id}>
							<CarsImg className="cars-image" src={car.image} alt="cars" />
						</Link>
						<div className="product-name">
							<Link to={"/results/" + car._id}>{car.name}</Link>
						</div>
						<div className="car-brand">{car.brand}</div>

						<Button className={classes.RequestButton}>Request</Button>
					</div>
				</li>
			))}
		</CarsUl>
	);
}

export default CarHomeScreen;
