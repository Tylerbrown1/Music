import React from "react";
import { Link } from "react-router-dom";
import data from "./carData";
import Cars from "./carSelection";

function ProductScreen(props) {
	const car = data.cars.find((x) => (x._id = props.match.params.id));

	return (
		// Back to Results Link
		<div className="back-to-results">
			<div>
				<div>
					<Link to="/">Back to results</Link>
				</div>
				{/* Img Div */}
				<div className="details">
					<div className="details-image">
						<img src={car._id + car.image} alt="product" />
					</div>
					{/* Details Div */}
					<div className="details-info">
						<ul>
							<li>{<h4>{Cars.name}</h4>}</li>
							<li>
								{Cars.rating} Stars ({Cars.numReviews} Reviews)
							</li>
							<li>
								Price:<b>${Cars.price}</b>
							</li>
							<li>
								Description:
								<div>{Cars.description}</div>
							</li>
						</ul>
					</div>
					{/* Action Div */}
					<div className="details-action">
						<ul>
							<li>Price: {Cars.price}</li>
							<li>Status: {Cars.price}</li>
							<li>
								Qty:{" "}
								<select>
									<option value="">1</option>
									<option value="">2</option>
									<option value="">3</option>
									<option value="">4</option>
								</select>
							</li>
							<li>
								<button className="button">Add to Cart</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<section>
				<div></div>
			</section>
		</div>
	);
}

export default ProductScreen;
