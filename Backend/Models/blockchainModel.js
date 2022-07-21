const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
	block_no: Number,
	timestamp: String,
	data: String,
	previousHash: String,
	nonce: Number,
	hash: String,
});

const blockchainSchema = new mongoose.Schema({
	chain: [blockSchema],
});
module.exports = mongoose.model("Blockchain", blockchainSchema);
