// const locationControllerRdirect = require("../../app/controller/locationController.js");
// const axios = require('axios');

var availableTags = [
	"Badda",
	"Dhanmondi",
	"Mohammadpur",
	"Mohakhali"
];
$("#autocomplete").autocomplete({
	source: availableTags
});

$("#menu").menu();

// Hover states on the static widgets
$("#dialog-link, #icons li").hover(
	function () {
		$(this).addClass("ui-state-hover");
	},
	function () {
		$(this).removeClass("ui-state-hover");
	}
);




let button = document.getElementById("locationBtn");

button.addEventListener("click", () => {

	let locationn = document.getElementById("autocomplete").value;



	window.location.href = `/home?location=${locationn}`;


});