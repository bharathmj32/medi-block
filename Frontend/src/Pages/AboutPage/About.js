import React from "react";

export default function About() {
	const funAdd = () => {
		localStorage.setItem(
			"shortlist",
			JSON.stringify({
				all: true,
				verified: false,
				video: false,
				owner: false,
				exclusive: false,
			})
		);
		window.location.reload(false);
	};
	const funDelete = () => {
		localStorage.removeItem("shortlist");
		window.location.reload(false);
	};
	const val = JSON.parse(localStorage.getItem("shortlist"));
	return (
		<div>
			<button onClick={funAdd}>add </button>
			<p>---------------</p>
			<button onClick={funDelete}>delete </button>
			<p>--------------</p>
			{val ? (
				<div>loaded from localStorage</div>
			) : (
				<div>nothing in local storage</div>
			)}
		</div>
	);
}
