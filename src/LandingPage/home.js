import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Container, Typography } from "@material-ui/core";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import CarSection from "./carSection";
import Card from "./AirportSection";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Icons from "./icons";
import Footer from "./footer";

const ImgStyle = styled.img`
  width: 100%;
  height: 100vh;
  transition: all 0.5s ease 0.2s;
`;

const TextDiv = styled.div`
  margin-left: 2rem;
  margin-top: 30%;
  transition: all 0.5s ease 0.2s;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Navbar position="static" />

      <Grid
        style={{
          background: "#1EBECA",
          marginTop: ".04rem",
        }}
        container
        spacing={3}
      >
        <Grid item sm={6}>
          <TextDiv>
            <Typography variant="h2" style={{ color: "white" }}>
              A Luxury
              <br /> Car Service
            </Typography>
            <Button
              component={Link}
              to="/login"
              type="address"
              style={{
                background: "#8c756A",
                color: "white",
                margin: "1.5rem 0.5rem",
              }}
            >
              Request
            </Button>{" "}
          </TextDiv>
        </Grid>
        <Grid item sm={6}>
          <ImgStyle src="/letsgo.png" alt="" />
        </Grid>
      </Grid>

      <CarSection />

      <Card />
      <Icons />
      <Footer />
    </div>
  );
}
