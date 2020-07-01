import React from "react";
import { Link } from "react-router-dom";
import data from "./carData";

function CarHomeScreen(props) {
	return (
		<ul className="cars">
			{data.cars.map((car) => (
				<li>
					<div className="cars">
						<Link to={"/cars/" + car._id}>
							<img className="cars-image" src={car.image} alt="cars" />
						</Link>
						<div className="product-name">
							<Link to={"/cars/" + car._id}>{car.name}</Link>
						</div>
						<div className="car-brand">{car.brand}</div>
						<div className="price-price">{car.price}</div>
						<div className="price-seats">{car.seats}</div>
					</div>
				</li>
			))}
		</ul>
	);
}

export default CarHomeScreen;
