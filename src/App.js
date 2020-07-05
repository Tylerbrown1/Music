import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./home/home";
import CarSelection from "../src/components/Cars/carSelection";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import { AuthProvider } from "./Auth/Auth";
import HomeAuth from "./Login/Home";
import PrivateRoute from "./Login/PrivateRoute";
import Results from "../src/Login/Results";

export default function App() {
	return (
		<AuthProvider>
			<Router>
				<div>
					<div>
						<Navbar />
					</div>
					<Route exact path="/" component={Home} />
					<Route exact={true} path="/carSelection" component={CarSelection} />
					<PrivateRoute exact path="/home" component={HomeAuth} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/results" component={Results} />
				</div>
			</Router>
		</AuthProvider>
	);
}
