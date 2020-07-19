import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { Button, InputLabel, Input, FormControl } from "@material-ui/core";
import { Link } from "react-router-dom";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>Sign up</h1>
        <h6>
          Already have an account? Click{" "}
          <Button component={Link} to="/login">
            Here
          </Button>
        </h6>
        <form onSubmit={handleSignUp}>
          <InputLabel>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              ref={register}
            />
          </InputLabel>

          <InputLabel>
            <Input
              type="text"
              name="LastName"
              placeholder="Last Name"
              ref={register}
            />
          </InputLabel>

          <InputLabel>
            <Input
              type="number"
              name="PhoneNumber"
              placeholder="Phone Number"
              ref={register}
            />
          </InputLabel>
          <InputLabel>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              ref={register}
            />
          </InputLabel>
          <InputLabel>
            <Input name="password" type="password" placeholder="Password" />
          </InputLabel>
          <Button
            style={{
              backgroundColor: "#8c756A",
              color: "white",
              marginTop: "1rem",
            }}
            type="submit"
            onChange={handleSubmit(onSubmit)}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
