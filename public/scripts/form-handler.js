var selectDetailsForm
var dateSelect
var dateOptions
var movies
var airnewzealandDateOptions = []


window.onload = function () {
	selectDetailsForm = document.getElementById('selectDetails')
	dateSelect = document.querySelector('.dateSelect')
	dateOptions = document.querySelector('#date-options')
}


function selectDateChangeHandler (airlineSelection) {
	switch(airlineSelection.value) {
		case 'airnewzealand':
			airnewzealandDates()
			break;
		case 'singapore':
			singaporeDates()
			break;
		case 'Please Select':
			break;
	}
}

function singaporeDates() {
	dateSelect.classList.toggle('show-hide')
	var singaporeDateOptions = ["This month", "Next month"]
	singaporeDateOptions.map(function (date){
		var option = document.createElement("option")
		option.value = date.replace(" ","").toLowerCase()
		option.text = date
		dateOptions.appendChild(option)		
	})
}

function airnewzealandDates() {
	dateSelect.classList.remove('show-hide')
}

