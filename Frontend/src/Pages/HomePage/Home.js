import React from "react";
import Footer from "../../Components_reusable/Footer";
import NavBarAndHome from "./NavBarAndHome";
import "../HomePage/home.scss";

function Home() {
	console.log("hellow home");
	return (
		<>
			<NavBarAndHome />
			<Footer />
		</>
	);
}

export default Home;
