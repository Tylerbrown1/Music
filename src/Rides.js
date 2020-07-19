import React from "react";
import { useStateValue } from "./StateProvider";
import YourTrips from "./YourTrips";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Rides() {
  const [{ order }] = useStateValue();
  return (
    <div>
      {order?.length === 0 ? (
        <div>
          <h2>No rides available</h2>
          <h6>
            Please select a ride{" "}
            <Button component={Link} to="/home">
              here
            </Button>
          </h6>
        </div>
      ) : (
        <div>
          <h2> Your booked rides</h2>
          {order.map((item) => (
            <YourTrips
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Rides;
