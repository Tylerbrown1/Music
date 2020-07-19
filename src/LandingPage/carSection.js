import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const CarImg = styled.img`
  width: 15rem;
`;

const CarDiv = styled.div`
  padding-bottom: 150px;
  padding-top: 150px;
`;
const TextDiv = styled.div`
  margin-left: 2rem;
`;

const carSection = () => {
  return (
    <CarDiv>
      <TextDiv>
        <Typography variant="h2">
          World class service <br /> in Budapest
        </Typography>
      </TextDiv>

      <Grid container spacing={3}>
        <Grid item sm={3}>
          <CarImg src="/sclass.png" alt="" />
        </Grid>
        <Grid item sm={3}>
          <CarImg src="/van.png" alt="" />
        </Grid>
        <Grid item sm={3}>
          <CarImg src="/mayback.png" alt="" />
        </Grid>
        <Grid item sm={3}>
          <CarImg src="/G-wagon.png" alt="" />
        </Grid>
      </Grid>
    </CarDiv>
  );
};

export default carSection;
