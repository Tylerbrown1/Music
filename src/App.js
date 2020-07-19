import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./LandingPage/home";
import CarSelection from "../src/components/Cars/carSelection";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import { AuthProvider } from "./Auth/Auth";
import HomeAuth from "./Login/Home";
import PrivateRoute from "./Login/PrivateRoute";
import Results from "../src/Login/Results";
import eachCar from "../src/components/Cars/eachCar";
import Rides from "./Rides";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            exact={true}
            path="/carSelection"
            component={CarSelection}
          />
          <PrivateRoute exact path="/home" component={HomeAuth} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/results" component={Results} />
          <PrivateRoute path="/eachcar/:id" component={eachCar} />
          <PrivateRoute path="/rides" component={Rides} />
        </div>
      </Router>
    </AuthProvider>
  );
}
