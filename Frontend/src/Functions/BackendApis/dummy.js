import axios from "axios";

//fetching
const getPatientData = async () => {
	const res = await axios.get(`/patient/`).catch((err) => console.log(err));
	//${id}
	const data = await res.data;
	return data;
};
const fethcDetails = async () => {
	const res = await axios.get(`/api/`);
	const data = await res.data;
	console.log(data);
	return data;
};
//put
const postData = async (input) => {
	const res = await axios
		.put(`/`, {
			title: input.title,
			desc: input.desc,
			image: input.image,
		})
		.catch((err) => console.log(err));
	const data = await res.data;
	return data;
};
//delete
const deleteRequest = async () => {
	const res = await axios.delete(`/`).catch((err) => console.log(err));
	const data = await res.data;
	return data;
};

//patient page

export { deleteRequest, postData, fethcDetails, getPatientData };
