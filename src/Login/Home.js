import React, { useState } from "react";

import GoogleMapInput from "../components/Inputs/GoogleMapInput";
import GoogleMapDest from "../components/Inputs/GoogleMapDestination";
import styled from "styled-components";

import { Link } from "react-router-dom";
import firebase from "./base";

const HomeDiv = styled.div`
	margin-top: 10rem;
`;

const Home = () => {
	const [pickUp, setPickUp] = useState("");
	const [dropOff, setDropOff] = useState("");
	const [time, setTime] = useState("");

	function onSubmit(e) {
		e.preventDefault();

		firebase
			.firestore()
			.collection("caruser")
			.add({
				pickUp,
				dropOff,
				time,
			})
			.then(() => {
				setPickUp("");
				setDropOff("");
			});
	}

	return (
		<HomeDiv component="nav">
			<button onClick={() => firebase.auth().signOut()}>Sign out</button>
			<h2>Where can would you like to go?</h2>
			<form onSubmit={onSubmit}>
				<GoogleMapInput
					value={pickUp}
					onChange={(e) => setPickUp(e.currentTarget.value)}
				/>
				<GoogleMapDest
					value={dropOff}
					onChange={(e) => setDropOff(e.currentTarget.value)}
				/>

				<input
					type="time"
					value={time}
					onChange={(e) => setTime(e.currentTarget.value)}
				/>
				<Link to="/carSelection" type="submit">
					<button type="submit">Next</button>
				</Link>
			</form>
		</HomeDiv>
	);
};

export default Home;
