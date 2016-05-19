var requestAnz = require('./requestAirNewZealand.js')
var scrapeMovies = require('./scrape-movies.js')
var getMovieRatings = require('./../../movie-data/get-movies.js')
var noRepeats = require('./no-airNz-repeats.js')
var dbFunctions = require('../../db_lib/db-functions.js')

// get movies from air new zealand, send callback as 

module.exports = function () {
	return requestAnz()
		.then(scrapeMovies)
		.then(noRepeats)
		// .then(getMovieRatings)
		.then(function (movieTitlesArray) {
			return Promise.all(movieTitlesArray)
				.then(function(responseArray) {
					console.log("Air New Zealand scrapped, titles added to db's")		
				})
			
		})
		.catch(handleError)
}



function handleError (error) {
	console.log("Error happend: ", error)
}



