import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./carData";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTwo from "../NavbarLogIn";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import styled from "styled-components";
import { Button, Box } from "@material-ui/core";
import Results from "../../Login/Results";
import carData from "./carData";
import { useStateValue } from "../../StateProvider";

const ListStyle = styled.ul`
  text-align: center;
  list-style: none;
`;

const ImgStyle = styled.img`
  width: 20rem;
  height: 90vh;
`;

function ProductScreen(props) {
  const car = data.cars.find((x) => x._id == props.match.params.id);
  const [{ order }, dispatch] = useStateValue();
  const addToOrder = () => {
    dispatch({
      type: "ADD_TO_ORDER",
      item: {
        id: car._id,
        name: car.name,
        image: car.image,
        price: car.price,
        description: car.description,
      },
    });
  };

  return (
    <>
      <NavbarTwo />

      <Carousel>
        <Carousel.Item>
          <ImgStyle
            className="d-block w-100"
            src="/inside.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              backgroundColor: "black",
              opacity: "50%",
              borderRadius: "4rem",
            }}
          >
            <h3 style={{ color: "white" }}>Impeccably Clean</h3>
            <p style={{ color: "white" }}>
              We take every precaution to ensure you have the cleanest ride..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImgStyle
            className="d-block w-100"
            src="/chauffeur.jpg"
            alt="Third slide"
          />

          <Carousel.Caption
            style={{
              backgroundColor: "black",
              opacity: "50%",
              borderRadius: "4rem",
            }}
          >
            <h3>Total Privacy</h3>
            <p>No one will be able to see or distract you in our cars.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImgStyle
            className="d-block w-100"
            src="/Luxury.jpg"
            alt="Third slide"
          />

          <Carousel.Caption
            style={{
              backgroundColor: "black",
              opacity: "50%",
              borderRadius: "4rem",
            }}
          >
            <h3>Great Service</h3>
            <p>Rest assured that we provide only the best service.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Img Div */}
      {/* <div className="details">
					<div className="details-image">
						<img src={car._id + car.image} alt="product" />
					</div> */}

      <div className="details-info">
        <ListStyle>
          <li>{<h4>{car.name}</h4>}</li>

          <li>
            Price Per Hour:<b>$USD{car.price}</b>
          </li>
          <li style={{ margin: "1rem" }}>
            Description:
            <div>{car.description}</div>
          </li>
        </ListStyle>
      </div>

      <div className="details-action">
        <ListStyle>
          <li>
            <Link to={"/results"}>
              <Button
                onClick={addToOrder}
                style={{
                  backgroundColor: "#8c756A",
                  color: "white",
                  margin: "1rem",
                }}
                className="button"
              >
                Request
              </Button>
            </Link>
          </li>
        </ListStyle>
      </div>

      <div className="back-to-results">
        <div>
          <div>
            <Link to="/carSelection">
              <KeyboardBackspaceIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductScreen;
