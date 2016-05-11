var requestAnz = require('./requestAirNewZealand.js')
var scrapeMovies = require('./scrape-movies.js')
var getMovieRatings = require('./../../movie-data/get-movies.js')
var noRepeats = require('./no-airNz-repeats.js')
var fs = require('fs')

// get movies from air new zealand, send callback as 


requestAnz()
	.then(scrapeMovies)
	.then(noRepeats)
	.then(getMovieRatings)
	.then(console.log)
	.catch(handleError)

function handleError (error) {
	console.log("Error happend: ", error)
}


