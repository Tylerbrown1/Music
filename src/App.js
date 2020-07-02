import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./home/home";
import CarSelection from "../src/components/Cars/carSelection";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import { AuthProvider } from "./Auth/Auth";
import HomeAuth from "./Login/Home";
import PrivateRoute from "./Login/PrivateRoute";

export default function App() {
	return (
		<AuthProvider>
			<Router>
				<div>
					<Navbar />

					<Route exact path="/" component={Home} />
					<Route exact={true} path="/carSelection" component={CarSelection} />
					<PrivateRoute exact path="/home" component={HomeAuth} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
				</div>
			</Router>
		</AuthProvider>
	);
}
