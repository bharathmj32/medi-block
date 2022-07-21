const Blockchain = require("../Models/blockchainModel");
const ObjectId = require("mongoose").Types.ObjectId;

const addGenesisBlock = async (req, res, next) => {
	const { block_no, timestamp, data, precedingHash, nonce, hash } = req.body;
	try {
		const doc = await Blockchain.create({
			chain: [
				{
					block_no: block_no,
					timestamp: timestamp,
					data: data,
					precedingHash: precedingHash,
					nonce: nonce,
					hash: hash,
				},
			],
		});
		doc.save();
		console.log(doc);
	} catch (e) {
		console.log(e.message);
		res.send(error, "He ");
	}
};
const addBlock = async (req, res) => {
	const id = "62a53d7943d8c28030ed6bd6";
	const { block_no, timestamp, data, precedingHash, nonce, hash } = {
		block_no: 1,
		timestamp: "1/06/2022",
		data: "new (1)-ipfs-hash-which-has-data-of-tis-block",
		precedingHash:
			"00be1df4d17b494ef0308bbca47a3c0b07a9de7d6357be9781df312fa0549a74",
		nonce: 177,
		hash: "0089a93cbf78e8aff690092abdff64ead28748803967d7a0a6bd991a19d1bfb3",
	};
	let block;
	try {
		block = await Blockchain.updateOne(
			{ _id: ObjectId("62a53d7943d8c28030ed6bd6") },
			{
				$push: {
					chain: {
						block_no: 1,
						timestamp: "1/06/2022",
						data: "new (1)-ipfs-hash-which-has-data-of-tis-block",
						precedingHash:
							"00be1df4d17b494ef0308bbca47a3c0b07a9de7d6357be9781df312fa0549a74",
						nonce: 177,
						hash: "0089a93cbf78e8aff690092abdff64ead28748803967d7a0a6bd991a19d1bfb3",
					},
				},
			}
		);
		console.log("sucess");
	} catch (error) {
		console.log(error);
	}
	if (!block) {
		return res.status(500).json("Unable To Update Block");
	}
	return res.status(200).json({ block });
};
const getBlockchain = async (req, res) => {
	const chains = await Blockchain.find();
	try {
		res.status(200).json(chains);
		console.log(chains);
	} catch (error) {
		console.log(error);
	}
	if (!chains) {
		return res.status(404).json("No chain found");
	}
};

module.exports = {
	addGenesisBlock,
	addBlock,
	getBlockchain,
};
