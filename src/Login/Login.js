import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "../Auth/Auth";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Button, Input, InputLabel } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", paddingTop: "4rem" }}>
        <h1>Log in</h1>
        <h6>
          Not a member yet? Sign Up{" "}
          <Button component={Link} to="/SignUp">
            here
          </Button>
        </h6>
        <form onSubmit={handleLogin}>
          <InputLabel>
            <Input name="email" type="email" placeholder="Email" />
          </InputLabel>
          <InputLabel>
            <Input name="password" type="password" placeholder="Password" />
          </InputLabel>
          <div>
            <Button
              style={{
                backgroundColor: "#8c756A",
                color: "white",
                marginTop: "1rem",
              }}
              type="submit"
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(Login);
