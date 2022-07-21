const SHA256 = require("crypto-js/sha256");

const checkChainValidity = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		const currentBlock = arr[i];
		const precedingBlock = arr[i - 1];

		if (currentBlock.hash !== computeHash(currentBlock)) {
			console.log("hacked block is " + currentBlock.block_no);
			return false;
		}
		if (currentBlock.precedingHash !== precedingBlock.hash) return false;
	}
	console.log("chain is safe");
	return true;
};
const computeHash = (obj) => {
	return SHA256(
		obj.block_no + obj.precedingHash + obj.timestamp + obj.data + obj.nonce
	).toString();
};
//for here onlyup
const proofOfWork = (obj, difficulty = 2) => {
	while (
		obj.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
	) {
		obj.nonce += 1;
		obj.hash = computeHash(obj);
	}
};
const addBlock = (arr, obj) => {
	if (arr.length === 0) {
		const block_no = obj.block_no;
		const timestamp = obj.timestamp;
		const data = obj.data;
		const precedingHash = obj.precedingHash;
		const hash = computeHash(obj);
		const nonce = 0;
		obj = {
			block_no: block_no,
			timestamp: timestamp,
			data: data,
			precedingHash: precedingHash,
			nonce: nonce,
			hash: hash,
		};
		proofOfWork(obj);
		return obj;
	} else {
		const block_no = obj.block_no;
		const timestamp = obj.timestamp;
		const data = obj.data;
		const precedingHash = obj.precedingHash;
		const hash = computeHash(obj);
		const nonce = 0;
		obj = {
			block_no: block_no,
			timestamp: timestamp,
			data: data,
			precedingHash: precedingHash,
			nonce: nonce,
			hash: hash,
		};
		proofOfWork(obj);
		return obj;
	}
};
export { checkChainValidity, computeHash, proofOfWork, addBlock };
