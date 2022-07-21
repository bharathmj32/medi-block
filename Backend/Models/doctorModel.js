const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
	phone: Number,
	aadhar: Number,
	qualification: String,
	specialisation: String,
	dob: String,
	address: String,
});
const doctorSchema = new mongoose.Schema({
	public_key: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	pwd: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		unique: true,
	},
	info: infoSchema,
	//patient_ids: [{ type: ObjectId, ref: "Patient" }],
});
module.exports = mongoose.model("Doctor", doctorSchema);
