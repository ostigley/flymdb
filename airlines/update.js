var updateAnz = require('./airnewzealand/update-anz-movie-db.js')
var updateSingapore = require('./singapore/update-singapore.js')


// updateAnz()
// 	.then(function () {
// 		console.log("Updated Air New Zealand")
// 	})

updateSingapore()
	.then(function () {
		console.log("Updated Singapore Airlines")
	})