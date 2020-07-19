import React from "react";
import styled from "styled-components";
import NavbarTwo from "../components/NavbarLogIn";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import data from "../components/Cars/carData";
import carData from "../components/Cars/carData";
import Rides from "../Rides";

const ResultDiv = styled.div`
  text-align: center;
`;

function Results(props) {
  return (
    <>
      <NavbarTwo />
      <ResultDiv style={{ marginTop: "5rem" }}>
        <CheckCircleOutlineIcon style={{ color: "green", fontSize: "8rem" }} />
        <h2>Thank you!</h2>
        <p>Expect a phone call from your Chauffer to confirm </p>
        <hr />
        <div>
          <Rides />
        </div>
      </ResultDiv>
    </>
  );
}
export default Results;
