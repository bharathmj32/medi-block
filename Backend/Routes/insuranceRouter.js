const express = require("express");
router = express.Router();
const {
	addPatient,
	deletePatient,
} = require("../Controllers/insuranceController");

router.put("/add_patient", addPatient);
router.put("/delete_patient", deletePatient);

module.exports = router;
