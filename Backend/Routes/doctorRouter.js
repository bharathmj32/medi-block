const express = require("express");
router = express.Router();
const {
	addPatient,
	deletePatient,
	loginDoctor
} = require("../Controllers/doctorController");

router.put("/add_patient", addPatient);
router.put("/delete_patient", deletePatient);
router.post("/login_doctor", loginDoctor);

module.exports = router;
