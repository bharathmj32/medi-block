const Patient = require("../Models/patientModel");
const bcrpt = require("bcrypt");

const registerPatient = async (req, res) => {
	//req.body
	const { public_key, name, pwd, email, info } = {
		public_key: "thisisapublickey",
		name: "Chitra B L",
		pwd: "bharath",
		email: "chitrareddy08@gmail.com",
		info: {
			phone: 7349656073,
			aadhar: 811605312457,
			blood_group: "AB+",
			gender: "Female",
			dob: "08/08/2001",
			address: "Sri Sai Garden, Boorgunte, Sarjapura",
		},
	};
	const Dbemail = await Patient.findOne({ email });
	if (Dbemail) {
		// return res.send({
		// 	success: false,
		// 	message: "User Already Registered",
		// 	status: 404,
		// });
		console.log("already existing");
	}
	try {
		const patient = await Patient.create({
			public_key,
			name,
			pwd,
			email,
			info,
		});
		console.log(patient);
		res.status(200).json({
			success: true,
			patient: patient,
		});

		patient.save();
	} catch (error) {
		console.log(error);
		//late uncomment res.send(error, "He ");
	}
};
//registerPatient();

const patientLogin = async (req, res) => {
	const { email, pwd } = { email: "chitrareddy08@gmail.com", pwd: "bharatha" };
	if (!email || !pwd) {
		//return res.status(400).json({ message: "Plz Provide Details" });
		console.log("fill fully");
	}
	try {
		const patient = await Patient.findOne({ email }).select("+pwd");
		const patients = await Patient.findOne({ email }).select("+_id");
		if (!patient) {
			//return res.status(400).json({ message: "Invalid Credentials" });
			console.log("Invalid credentials");
		}

		if (await bcrpt.compare(pwd, patient.pwd)) {
			console.log("correct password");
			console.log("loggin in ", patients.name);
			//id is getting returned here
			//return res.status(200).json({ patients });
		} else {
			console.log("wrong pwd");
		}
	} catch (error) {
		// res.status(500).json({
		// 	success: false,
		// 	error: error.message,
		// });
		console.log(error);
	}
};
patientLogin();

const addDoctor = async (req, res) => {};
const addInsurer = async (req, res) => {};
const deleteDoctor = async (req, res) => {};
const deleteInsurer = async (req, res) => {};

module.exports = {
	registerPatient,
	addDoctor,
	addInsurer,
	deleteDoctor,
	deleteInsurer,
	patientLogin,
};
