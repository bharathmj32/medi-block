import React from "react";
import { Grid, Typography } from "@mui/material";
import Logo from "../Assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
	return (
		<Grid
			item
			container
			className="navBarContainer"
			justifyContent="space-between"
			sx={{ width: "94%", margin: "0 auto", marginTop: "20px" }}
		>
			{/* logo n title */}
			<Grid item container md={3} alignItems="center">
				<Grid item>
					<Link to="/">
						<img src={Logo} alt="logo" className="imgLogo" />
					</Link>
				</Grid>
				<Grid item>
					<Link to="/">
						<Typography variant="body1" className="logoTitle">
							Medico
						</Typography>
					</Link>
				</Grid>
			</Grid>
			{/* other link options */}
			<Grid
				item
				container
				md={7}
				justifyContent="space-evenly"
				alignItems="center"
			>
				<Grid item>
					<NavLink to="/" className="links" exact activeClassName="active">
						Home
					</NavLink>
				</Grid>
				<Grid item>
					<NavLink
						to="/patient"
						className="links"
						exact
						activeClassName="active"
					>
						Patients
					</NavLink>
				</Grid>
				<Grid item>
					<NavLink
						to="/doctor"
						className="links"
						exact
						activeClassName="active"
					>
						Doctors
					</NavLink>
				</Grid>
				<Grid item>
					<NavLink
						to="/insurance"
						className="links"
						exact
						activeClassName="active"
					>
						Insurer
					</NavLink>
				</Grid>
				<Grid item>
					<NavLink to="/about" className="links" exact activeClassName="active">
						About
					</NavLink>
				</Grid>
			</Grid>
		</Grid>
	);
}
