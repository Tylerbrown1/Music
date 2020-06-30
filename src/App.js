import React from "react";

import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "./home/home";
import CarSection from "./home/carSection";
import Card from "./home/Cards";
import styled from "styled-components";

function App() {
	return (
		<>
			<div>
				<Navbar />
			</div>

			<Home />
			<CarSection />
			<Card />
		</>
	);
}

export default App;
