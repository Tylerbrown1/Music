import React from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function YourTrips({ id, name, image, price, description }) {
  const [{ order }, dispatch] = useStateValue();
  const cancelTrip = () => {
    dispatch({
      type: "REMOVE_FROM_ORDER",
      id: id,
    });
  };
  return (
    <div>
      <img style={{ width: "10rem" }} src={image} alt="" />
      <div>
        <p>{name}</p>
        <p>
          <small>$</small>
          <strong>{price} Per Hour</strong>
        </p>
        <div>
          <p>{description}</p>
        </div>
        <Button style={{ backgroundColor: " #ffcccb" }} onClick={cancelTrip}>
          Cancel Trip
        </Button>
        <hr />
      </div>
    </div>
  );
}

export default YourTrips;
