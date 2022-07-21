import React, { useEffect, useState } from "react";
import {
	checkChainValidity,
	addBlock,
} from "../../Functions/Blockchains/Blockchain";
import { Navigate } from "react-router-dom";
import axios from "axios";
import GrantAccess from "../../Components_reusable/GrantAccess";

export default function Patient(props) {
	const [chain, setChain] = useState([]);

	const postPatientChain = async () => {
		console.log(chain[0]);
		const res = await axios
			.post("/blockchain/putgenesis", {
				block_no: chain[0].block_no,
				timestamp: chain[0].timestamp,
				data: chain[0].data,
				precedingHash: chain[0].precedingHash,
				nonce: chain[0].nonce,
				hash: chain[0].hash,
			})
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};
	const getPatientChain = async () => {
		const res = await axios
			.get(`/blockchain/getblockchain`)
			.catch((err) => console.log(err));
		//${id}
		const data = await res.data;
		return data;
	};
	const id = "62a53d7943d8c28030ed6bd6";
	const putPatientBlock = async () => {
		const res = await axios
			.put(`/blockchain/putblock/`, {})
			.catch((err) => console.log(err));
		const data = await res.data;
		return data;
	};
	useEffect(() => {
		setChain((prevState) => [
			...prevState,
			addBlock(chain, {
				block_no: 0,
				timestamp: "0/06/2022",
				data: "new this is genesis block.",
				precedingHash: "0",
			}),
		]);
		setChain((prevState) => [
			...prevState,
			addBlock(chain, {
				block_no: 1,
				timestamp: "1/06/2022",
				data: "new (1)-ipfs-hash-which-has-data-of-tis-block",
				precedingHash: prevState.at(-1).hash,
			}),
		]);
		setChain((prevState) => [
			...prevState,
			addBlock(chain, {
				block_no: 2,
				timestamp: "2/06/2022",
				data: "new (2)-ipfs-hash-which-has-data-of-tis-block",
				precedingHash: prevState.at(-1).hash,
			}),
		]);

		// getPatientChain().then((chain) => {
		// 	setChain(chain);
		// });
	}, []);

	const hackChain = () => {
		//hacking a data
		// setChain((ps) => [
		// 	...ps.slice(0, 1),
		// 	Object.assign({}, ps[1], {
		// 		data: "hacked data",
		// 	}),
		// 	...ps.slice(1 + 1),
		// ]);

		//postPatientChain(chain[0]);
		//putPatientBlock();
		getPatientChain().then((data) => console.log(data));
	};
	console.log(JSON.stringify(chain, " ", 4));
	checkChainValidity(chain);

	if (!props.auth) {
		return <Navigate to="/login" replace={true} />;
	}
	return (
		<>
			<h1>Patient</h1>
			<div>
				{/* {console.log("child rendr")} */}
				{JSON.stringify(chain, " ", 4)}
			</div>
			<button
				onClick={() => {
					hackChain();
				}}
			>
				hack chain
			</button>

			<GrantAccess />
		</>
	);
}
