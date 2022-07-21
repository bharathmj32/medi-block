import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import imgTop from "../../Assets/top.png";
import imgLeft from "../../Assets/left.png";
import imgBg from "../../Assets/bg.png";
import { Link, useLocation } from "react-router-dom";
import "./login.scss";

function Login() {
	const [users, setUsers] = useState([]);
	const { data } = useLocation();
	const d = data;
	console.log(d);
	useEffect(() => {
		fetch("/login/")
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((jsonRes) => setUsers(jsonRes.uname));
	});

	return (
		<>
			<div>
				{users.map((user) => (
					<li>{user}</li>
				))}
			</div>
			<div className="loginContainer">
				{/* <img src={imgTop} alt="illustration" className="imgTop" /> */}

				<Grid container className="loginBox">
					<img src={imgBg} alt="bg-img" className="imgBg" />

					<Grid item className="leftBox" md={6}>
						<img src={imgLeft} alt="illustrataion" className="imgLeftBox" />
					</Grid>

					<Grid
						item
						container
						className="rightBox"
						direction="column"
						justifyContent="space-evenly"
						md={6}
					>
						<Grid item>
							<Typography variant="body1" className="title">
								Login to Your Account
							</Typography>
						</Grid>
						{/* <Grid item alignSelf='center'>
	            <span>WA</span>
	            <span>IG</span>
	            <span>FB</span>
	        </Grid> */}
						<Grid item>
							<input
								className="uname"
								type="text"
								placeholder="Enter Username"
							/>
						</Grid>
						<Grid item>
							<input
								className="pass"
								type="text"
								placeholder="Enter Password"
							/>
						</Grid>
						<Grid item>
							<input type="checkbox" className="check" />
							<Typography variant="body1" className="confirm">
								I aggree to the terms and conditions.
							</Typography>
						</Grid>

						<Grid item>
							<Link to="/patient">
								<Button variant="body1" className="inBtn">
									Sign In
								</Button>
							</Link>
							<Link to="/register">
								<Button variant="body1" className="upBtn">
									Sign Up
								</Button>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default Login;
