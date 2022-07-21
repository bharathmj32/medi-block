const { create } = require("ipfs-http-client");

async function ipfsClient() {
	const ipfs = await create({
		host: "ipfs.infura.io",
		port: 5001,
		protocol: "https",
	});
	return ipfs;
}

async function saveText() {
	let ipfs = await ipfsClient();
	let result = await ipfs.add("hello");
	console.log(result);
}
saveText();

async function saveFile() {
	let ipfs = await ipfsClient();
	let data = {
		name: "aidi",
		age: "27",
	};
	let res = await ipfs.add({ path: "abc.json", content: JSON.stringify(data) });
	console.log(res);
}
saveFile();

async function getData(hash) {
	let ipfs = await ipfsClient();
	let asyncitr = ipfs.cat(hash);
	for await (const itr of asyncitr) {
		let data = Buffer.from(itr).toString();
		console.log(data);
	}
}
getData("sdjfksadjs");

//img upload

const captureFile = (event) => {
	if (event.target.files[0]) {
		event.preventDefault();
		//setFile(URL.createObjectURL(event.target.files[0]));

		const reader = new FileReader();
		reader.readAsArrayBuffer(event.target.files[0]);
		reader.addEventListener("load", () => {
			//setBuffer(reader.result);
		});
	}
};

{
	/* <div>
	<img src={isFile} alt="" style={{ maxWidth: "400px" }} />
	<input type="file" onChange={captureFile} />
</div>; */
}

async function getHash() {
	try {
		let ipfs = await ipfsClient();
		const uploadResult = await ipfs.add(Buffer.from());
		//setIpfsHash(uploadResult.path);
		console.log(uploadResult);
	} catch (e) {
		console.log(e);
		return;
	}
}
