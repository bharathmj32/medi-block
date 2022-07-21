const express = require("express");
router = express.Router();
const {
	registerPatient,
	patientLogin,

	addDoctor,
	addInsurer,
	deleteDoctor,
	deleteInsurer,
} = require("../Controllers/patientController");

router.post("/register_patient", registerPatient);
router.post("/login", patientLogin);
router.put("/add_doctor", addDoctor);
router.put("/add_inusurer", addInsurer);
// to  check its put or delete
router.delete("/delete_doctor", deleteDoctor);
router.delete("/delete_insurer", deleteInsurer);

module.exports = router;
