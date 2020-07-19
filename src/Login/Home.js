import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import GoogleMapInput from "../components/Inputs/GoogleMapInput";
import GoogleMapDest from "../components/Inputs/GoogleMapDestination";
import styled from "styled-components";
import { Link } from "react-router-dom";
import firebase from "./base";
import { Button, Box, FormControl } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import NavbarTwo from "../components/NavbarLogIn";

const GoogleDiv = styled.div`
  margin-top: 2rem;
`;
const StyledForm = styled.form``;
const ImgStyle = styled.img`
  width: 20rem;
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
    <div component="nav">
      <NavbarTwo position="static" />

      <Grid style={{ paddingTop: "5rem" }} container spacing={3}>
        <Grid style={{ display: "flex", justifyContent: "center" }} item sm={6}>
          <ImgStyle src="/privateCar.png" alt="" />
        </Grid>
        <Grid item sm={6}>
          <Box>
            <h2>Where would you like to go?</h2>
          </Box>
          <FormControl onSubmit={onSubmit}>
            <GoogleMapInput
              value={pickUp}
              onChange={(e) => setPickUp(e.currentTarget.value)}
            />
            <GoogleDiv>
              <GoogleMapDest
                style={{ marginTop: "5rem" }}
                value={dropOff}
                onChange={(e) => setDropOff(e.currentTarget.value)}
              />
            </GoogleDiv>
            <GoogleDiv>
              <TextField
                required
                id="datetime-local"
                label="Appointment Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setTime(e.currentTarget.value)}
              />
            </GoogleDiv>
            <div>
              <Button
                style={{
                  backgroundColor: "lightgrey",
                  margin: "2rem 1rem 0 0",
                }}
                type="submit"
              >
                Submit
              </Button>
              <Link to="/carSelection" type="submit">
                <Button
                  style={{
                    backgroundColor: "#8c756A",
                    color: "white",
                    textDecorationLine: "underline",
                    margin: "2rem 1rem 0 0",
                  }}
                >
                  Next
                </Button>
              </Link>
            </div>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
