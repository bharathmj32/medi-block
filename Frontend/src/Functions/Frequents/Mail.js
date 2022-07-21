import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const data = {
	subject: "Mediblock Secret Key",
	name: "Nandan",
	public_key: "sdbjmawjjsfc asdjbfjsdfcsdkj sdbdskjfhs d dsihfkds",
};
sendEmail(data);
const sendEmail = (data) => {
	//e.preventDefault();
	//data.subject, data.name, data.public_key
	emailjs.sendForm("gmail", "template_ck7s58e", data, "Y-bLeJovf55xGDRAG").then(
		(result) => {
			console.log(result.text);
		},
		(error) => {
			console.log(error.text);
		}
	);
	//e.target.reset();
};
