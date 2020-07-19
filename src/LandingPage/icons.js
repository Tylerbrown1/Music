import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const ImgStyle = styled.img`
  width: 100%;
  height: auto;
`;
const CardStyle = styled.div`
  margin-top: 10rem;
  height: 50vh;
`;

const TextDiv = styled.div`
  text-align: center;
  margin-top: 0rem;
  margin-left: 0rem;
`;
const TypeDiv = styled.div`
  margin-bottom: 1.5rem;
`;

const Icons = () => {
  return (
    <CardStyle>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
        container
        spacing={0}
      >
        <Grid item sm={3}>
          <DriveEtaIcon style={{ fontSize: "4rem", color: "#1EBECA" }} />
          <Typography variant="h5">Supplying only the newest models</Typography>
        </Grid>

        <Grid item sm={3}>
          <AccessAlarmsIcon style={{ fontSize: "4rem", color: "#1EBECA" }} />
          <Typography variant="h5">Always on time</Typography>
        </Grid>
        <Grid item sm={3}>
          <AttachMoneyIcon style={{ fontSize: "4rem", color: "#1EBECA" }} />
          <Typography variant="h5">
            Only pay once your ride is finished
          </Typography>
        </Grid>
      </Grid>
    </CardStyle>
  );
};

export default Icons;
