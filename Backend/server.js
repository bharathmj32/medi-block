const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const mongoPath =
	"mongodb+srv://bharath:Bharath%51234@cluster0.arvuh.mongodb.net/fyp?retryWrites=true&w=majority";
const port = 5000;

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to mongodb
mongoose.connect(mongoPath, () => {
	console.log("mongoose connected"), (e) => console.error(e);
});

//routes
app.use("/patient/", require("./Routes/patientRouter"));
app.use("/doctor/", require("./Routes/doctorRouter"));
app.use("/insurance/", require("./Routes/insuranceRouter"));
app.use("/blockchain/", require("./Routes/blockchainRouter"));

app.listen(port, function () {
	console.log("Express is running ");
});
