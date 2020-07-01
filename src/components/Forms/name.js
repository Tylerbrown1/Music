import React from "react";

import ItemForm from "./ItemForm";

const Name = ({ setForm, formData, navigation }) => {
	const { firstName, lastName } = formData;

	const { next } = navigation;

	return (
		<div>
			<img src="" alt="" />

			<ItemForm
				label="First Name"
				name="firstName"
				value={firstName}
				onChange={setForm}
			/>
			<ItemForm
				label="Last Name"
				name="lastName"
				value={lastName}
				onChange={setForm}
			/>
			<div>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};
