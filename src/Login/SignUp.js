import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { useForm } from "react-hook-form";

const SignUp = ({ history }) => {
	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app
					.auth()
					.createUserWithEmailAndPassword(email.value, password.value);
				history.push("/home");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<h1>Sign up</h1>
			<h6>Already have an account?</h6>
			<form onSubmit={handleSignUp}>
				<label>
					<input
						type="text"
						name="firstName"
						placeholder="First Name"
						ref={register}
					/>
				</label>

				<label>
					<input
						type="text"
						name="LastName"
						placeholder="Last Name"
						ref={register}
					/>
				</label>

				<label>
					<input
						type="number"
						name="PhoneNumber"
						placeholder="Phone Number"
						ref={register}
					/>
				</label>
				<label>
					<input name="email" type="email" placeholder="Email" ref={register} />
				</label>
				<label>
					<input name="password" type="password" placeholder="Password" />
				</label>
				<button type="submit" onChange={handleSubmit(onSubmit)}>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default withRouter(SignUp);
