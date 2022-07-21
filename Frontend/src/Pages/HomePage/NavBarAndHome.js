import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Persons from "../../Assets/persons.png";

import Blockchain from "../../Assets/blockchain.png";
import Cloud from "../../Assets/cloud.png";
import BgCloud from "../../Assets/bgCloud.png";

function NavBarAndHome() {
	return (
		<div className="homeContainer">
			{/* <img src={BgCloud} alt="bg-cloud" className="bgCloud" /> */}
			<Grid
				container
				direction="column"
				className="navAndHomeContainer"
				justifyContent="space-between"
				rowSpacing={12}
			>
				{/* homeDesc */}
				<Grid item container className="homeDesc">
					<Grid
						item
						container
						direction="column"
						justifyContent="center"
						md={6}
						rowSpacing={3}
					>
						<Grid item>
							<Typography variant="body1" className="homeTitle">
								We help people to get appointment in online
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className="homeDesc">
								Lorem Media is a full-service social media agency. We offer
								businesses innovative solutions that deliver the right type of
								audience to you in the most effective strategies possible. We
								strive to develop a community around your business, polishing
								your branding, and improving your public relations.
							</Typography>
						</Grid>
					</Grid>

					<Grid item md={6}>
						<img src={Persons} className="imgPersons" alt="3d-illustaration" />
					</Grid>
				</Grid>

				{/* blockchain */}
				<Grid item container className="blockchainContainer">
					<Grid item md={6}>
						<img
							src={Blockchain}
							alt="3d-illustration"
							className="imgBlockchain"
						/>
					</Grid>

					<Grid
						item
						container
						direction="column"
						justifyContent="space-evenly"
						md={6}
						className="blockchainInfoContainer"
					>
						<Grid item>
							<Typography variant="body1" className="title">
								block-chain
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className="titleDesc">
								A efficient secured storage architecture
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className="body">
								Lorem Media is a full-service social media agency. We offer
								businesses innovative solutions that deliver the right type of
								audience to you in the most effective strategies possible. We
								strive to develop a community around your business, polishing
								your branding, and improving your public relations.
							</Typography>
						</Grid>
						<Grid item>
							<Button variant="contained" className="button">
								See More
							</Button>
						</Grid>
					</Grid>
				</Grid>

				{/* cloud  */}
				<Grid item container className="cloudContainer">
					<Grid
						item
						container
						direction="column"
						justifyContent="space-evenly"
						className="cloudInfoContainer"
						md={6}
					>
						<Grid item>
							<Typography variant="body1" className="title">
								Cloud Technology
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className="titleDesc">
								A provider for decentralised system of storage of data with
								various computational capacity
							</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" className="body">
								Lorem Media is a full-service social media agency. We offer
								businesses innovative solutions that deliver the right type of
								audience to you in the most effective strategies possible. We
								strive to develop a community around your business, polishing
								your branding, and improving your public relations.
							</Typography>
						</Grid>
						<Grid item>
							<Button variant="contained" className="button">
								See More
							</Button>
						</Grid>
					</Grid>

					<Grid item md={6}>
						<img src={Cloud} alt="3d-illustration" />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default NavBarAndHome;
