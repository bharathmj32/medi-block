import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import "./register.scss";

export default function Register() {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		gender: "",
		dob: "",
		pwd: "",
		phone: "",
		blood_group: "",
	});
	const Bloodgroups = [" ", "A+", "A-", "B+", "B-", "AB+", "AB-"];
	const updateFormData = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};
	console.log(formData);

	return (
		<Grid container direction="column">
			<Grid item>
				<Typography variant="body1">Patient Registration</Typography>
			</Grid>

			<Grid item>
				<form className="formContainer">
					<input
						value={formData.fname}
						onChange={(e) => updateFormData(e)}
						placeholder="First name"
						type="text"
						name="fname"
						required
					/>
					<input
						value={formData.lname}
						onChange={(e) => updateFormData(e)}
						placeholder="Last name"
						type="text"
						name="lname"
						required
					/>
					<select
						name="blood_group"
						value={formData.blood_group}
						onChange={(e) => updateFormData(e)}
					>
						{Bloodgroups.map((item) => (
							<option value={item}>{item}</option>
						))}
					</select>
					<input
						value={formData.email}
						onChange={(e) => updateFormData(e)}
						placeholder="Email address"
						type="email"
						name="email"
						required
					/>
					<input
						value={formData.pwd}
						onChange={(e) => updateFormData(e)}
						placeholder="Password"
						type="password"
						name="pwd"
						required
					/>
					<input
						value={formData.dob}
						onChange={(e) => updateFormData(e)}
						type="date"
						name="dob"
						required
					/>
					<input
						value={formData.phone}
						onChange={(e) => updateFormData(e)}
						type="tel"
						name="phone"
						placeholder="123-456-7890"
						required
					/>
					<label>
						<input
							value="Female"
							onChange={(e) => updateFormData(e)}
							name="gender"
							type="radio"
							checked={formData.gender === "Female"}
						/>
						Female
					</label>
					<label>
						<input
							value="Male"
							onChange={(e) => updateFormData(e)}
							name="gender"
							type="radio"
							checked={formData.gender === "Male"}
						/>
						Male
					</label>

					<button type="submit">Submit</button>
				</form>
			</Grid>
		</Grid>
	);
}
