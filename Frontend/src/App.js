// import Contact from "./Pages/Contact";
// import Card from "./Pages/Card";
// import Chartt from "./Pages/Chartt";

import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Register from "./Pages/RegisterPage/Register";
import Login from "./Pages/LoginPage/Login";
import Patient from "./Pages/PatientPage/Patient";
import Doctor from "./Pages/DoctorPage/Doctor";
import Insurance from "./Pages/InsurancePage/Insurance";
import Navbar from "./Components_reusable/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/patient" element={<Patient auth={true} />} />
				<Route path="/doctor" element={<Doctor auth={true} />} />
				<Route path="/insurance" element={<Insurance auth={false} />} />
				<Route path="/about" element={<About />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
