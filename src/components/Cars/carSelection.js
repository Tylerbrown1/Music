import React from "react";
import { Link } from "react-router-dom";
import data from "./carData";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

import NavbarTwo from "../NavbarLogIn";

//css styles
const CarsUl = styled.ul`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  padding-inline-start: 0;
`;

const CarsImg = styled.img`
  width: 20rem;
`;

const myStyles = makeStyles((theme) => ({
  RequestButton: {},
}));

function CarHomeScreen(props) {
  const classes = myStyles();
  return (
    <>
      <NavbarTwo position="static" />
      <h2>Choose a ride</h2>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <CarsUl className="cars">
            {data.cars.map((car) => (
              <li>
                <div className="cars">
                  <Link to={"/eachcar/" + car._id}>
                    <CarsImg
                      className="cars-image"
                      src={car.image}
                      alt="cars"
                    />
                  </Link>
                  <div className="product-name">
                    <Link to={"/eachcar/" + car._id}>{car.name}</Link>
                  </div>
                  <div className="car-brand">{car.brand}</div>
                </div>
              </li>
            ))}
          </CarsUl>
        </Grid>
      </Grid>
    </>
  );
}

export default CarHomeScreen;
