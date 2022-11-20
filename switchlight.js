function switchLight(params) {
	let light1 = document.getElementById("light1");
	let light2 = document.getElementById("light2");
	let toggle = document.getElementById("AcceptConditions");

	// button light
	if (params == "on") {
		light1.src = "./assets/images/on.gif";
	}
	if (params == "off") {
		light1.src = "./assets/images/off.gif";
	}

	//switch light
	if (toggle.checked) {
		light2.src = "./assets/images/on.gif";
	} else {
		light2.src = "./assets/images/off.gif";
	}
	return light1;
}
