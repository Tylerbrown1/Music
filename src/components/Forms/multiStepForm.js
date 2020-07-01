import React from "react";
import { useForm, useStep } from "react-hooks-helper";

const steps = [
	{ id: "phonenumber" },
	{ id: "name" },
	{ id: "carselection" },
	{ id: "submit" },
];

const defaultData = {
	firstName: "John",
	lastName: "Smith",
	email: "email@test.com",
	phone: "+61 1234 567 890",
};

const MultiStepForm = ({ images }) => {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation } = useStep({ initialStep: 0, steps });
	const { id } = step;

	const props = { navigation };

	switch (id) {
		case "phonenumber":
			return <PhoneNumber {...props} />;

		case "name":
			return <Name {...props} />;

		case "carselection":
			return <CarSelection {...props} />;

		case "submit":
			return <Submit {...props} />;

		default:
			return null;
	}
};

export default MultiStepForm;
