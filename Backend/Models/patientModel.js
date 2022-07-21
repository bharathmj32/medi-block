const mongoose = require("mongoose");
const bcrpt = require("bcrypt");

const infoSchema = new mongoose.Schema({
	phone: Number,
	aadhar: Number,
	blood_group: String,
	gender: String,
	dob: Date,
	address: String,
});
const patientSchema = new mongoose.Schema({
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
	list_doc_ids:[{type:mongoose.SchemaTypes.ObjectId,ref:"Doctor"}],
	list_doc_ids:[{type:mongoose.SchemaTypes.ObjectId,ref:"Insurance"}],
	block_id:{type:mongoose.SchemaTypes.ObjectId,ref:"Blockchain"},
	info: infoSchema,
});

patientSchema.pre("save", async function (next) {
	const salt = await bcrpt.genSalt(10);
	this.pwd = await bcrpt.hash(this.pwd, salt);
	next();
});

module.exports = mongoose.model("Patient", patientSchema);
