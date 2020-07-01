import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "./home/home";
import CarSection from "./home/carSection";
import Card from "./home/AirportSection";
import styled from "styled-components";
import CarSelection from "../src/components/Cars/carSelection";

function App() {
	return (
		<>
			<div>
				<Navbar />
			</div>

			<Route exact path="/" component={Home} />
			<Route path="/carSelection" component={CarSelection} />
		</>
	);
}

export default App;
