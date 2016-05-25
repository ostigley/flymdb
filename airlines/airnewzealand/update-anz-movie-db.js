var requestAnz = require('./requestAirNewZealand.js')
var scrapeMovies = require('./scrape-movies.js')
var getMovieRatings = require('./../../movie-data/get-movies.js')
var noRepeats = require('./no-airNz-repeats.js')


var Promise = require('bluebird')


var knexConfig = require('../../knexfile.js')[process.env.NODE_ENV] 
var knex = require('knex')(knexConfig) // sets up knex with environment config. 

var dbFunctions = require('../../db_lib/db-functions.js')  // pulls in our db functions
var db = dbFunctions(knex)  // decalres our db functions with knex environment


// get movies from air new zealand, send callback as 

module.exports = function () {
	return new Promise (function (resolve, reject) {
		return requestAnz()	
			.then(scrapeMovies)
			.then(noRepeats)
			.then(function (movieTitlesArray) {
				Promise.all(movieTitlesArray.map(function(movie) {
					return new Promise (function (reslv, reject) {
						db.addMovieIfNotExist(movie,'airnewzealand', function(error, response) {
							if (error) {
								console.log("error in update nz", error)
							} else {
								reslv(response)		
							}
						})
					})
				}))
				.then(function() {
					console.log("*******\n\nFinished Updating Air New Zealand\n\n*******\n\n")
					resolve()
				})
			})
			.catch(handleError)
	})
}



function handleError (error) {
	console.log("Error happend in update-anz-db.js: ", error)
}



