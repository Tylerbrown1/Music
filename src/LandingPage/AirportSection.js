import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgStyle = styled.img`
  width: 100%;
  height: auto;
`;
const CardStyle = styled.div`
  margin-top: 4rem;
`;

const TextDiv = styled.div`
  text-align: center;
  margin-top: 0rem;
  margin-left: 0rem;
`;
const TypeDiv = styled.div`
  margin-bottom: 1.5rem;
`;

const Cards = () => {
  return (
    <CardStyle>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <ImgStyle src="/airport.png" alt="" />
        </Grid>

        <Grid style={{ marginTop: "8rem", textAlign: "center" }} item sm={6}>
          <TypeDiv>
            <Typography variant="h2">Airport Pickups</Typography>
          </TypeDiv>
          <Typography>
            Find out where to meet your driver,
            <br /> and get detailed directions for how to find your pickup
            location.
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
            Request Now
          </Button>
        </Grid>
      </Grid>
    </CardStyle>
  );
};

export default Cards;
