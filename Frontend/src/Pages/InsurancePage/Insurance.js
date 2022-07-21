import React from "react";
import { Navigate } from "react-router-dom";

export default function Insurance(props) {
	if (!props.auth) {
		return <Navigate to="/login" data="wow" replace={true} />;
	}
	return <div>Insurance</div>;
}
