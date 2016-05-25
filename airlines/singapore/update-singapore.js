var requestSingapore = require('./request-singapore.js')
var scrapeMovies = require('./scrape-singapore.js')
var noRepeats = require('./no-singapore-repeats.js')

var Promise = require('bluebird')


var knexConfig = require('../../knexfile.js')[process.env.NODE_ENV] 
var knex = require('knex')(knexConfig) // sets up knex with environment config. 

var dbFunctions = require('../../db_lib/db-functions.js')  // pulls in our db functions
var db = dbFunctions(knex)  // decalres our db functions with knex environment
// get movies from air new zealand, send callback as 


module.exports = function () {
	return new Promise (function (resolve, reject) {
	 	return requestSingapore()	
			.then(scrapeMovies)
			.then(noRepeats)
			.then(function (movieTitlesArray) {
				Promise.all(movieTitlesArray.map(function(movie) {
					return new Promise (function (reslv, reject) {
						db.addMovieIfNotExist(movie,'singapore', function(error, response) {
							if (error) {
								console.log("error in update singapore", error)
							} else {
								reslv(response)		
							}
						})
					})
				}))
				.then(function() {
					console.log("*******\n\nFinished Updating Singapore \n\n*******\n\n")
					resolve()
				})
			})
		.catch(handleError)
	})
}



function handleError (error) {
	console.log("Error happend: ", error)
}



