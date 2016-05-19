var requestAnz = require('./requestAirNewZealand.js')
var scrapeMovies = require('./scrape-movies.js')
var getMovieRatings = require('./../../movie-data/get-movies.js')
var noRepeats = require('./no-airNz-repeats.js')
var db = require('../../db_lib/db-functions.js')
var Promise = require('bluebird')
var knex = require('knex')({
    client: 'sqlite3',
    connection: {
    filename: "./flymydb.sqlite"
	 },
	 useNullAsDefault: true
});
// get movies from air new zealand, send callback as 

module.exports = function () {
		return requestAnz()
			.then(scrapeMovies)
			.then(noRepeats)
			// .then(getMovieRatings)
			.then(function (movieTitlesArray) {
				Promise.all(movieTitlesArray.map(function(movie) {
					return new Promise (function (resolve, reject) {
						db.addMovieIfNotExist(movie,'airnewzealand', function(error, response) {
							if (error) {
								console.log("error in update nz", error)
							} else {
								resolve(response)		
							}
						})
					})
				}))
				.then(function() {
					console.log("*******\n\nFinished Updating Air New Zealand\n\n*******\n\n")
					process.exit()
				})
			})

	.catch(handleError)
}



function handleError (error) {
	console.log("Error happend: ", error)
}



