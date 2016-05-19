var updateAnz = require('./airnewzealand/update-anz-movie-db.js')

updateAnz()
	.then(function () {
		console.log("Updated Air New Zealand")
	})