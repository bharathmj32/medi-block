const express = require("express");
router = express.Router();
const {
	addGenesisBlock,
	addBlock,
	getBlockchain,
} = require("../Controllers/blockchainController");

router.post("/putgenesis/", addGenesisBlock);
router.put("/putblock/", addBlock);
router.get("/getblockchain/", getBlockchain);

module.exports = router;
