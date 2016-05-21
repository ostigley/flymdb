var requestSingapore = require('./request-singapore.js')
var scrapeMovies = require('./scrape-singapore.js')
var noRepeats = require('./no-singapore-repeats.js')
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
		return requestSingapore()
			.then(scrapeMovies)
			.then(noRepeats)
			.then(function (movieTitlesArray) {
				Promise.all(movieTitlesArray.map(function(movie) {
					return new Promise (function (resolve, reject) {
						db.addMovieIfNotExist(movie,'singapore', function(error, response) {
							if (error) {
								console.log("error in update singapore", error)
							} else {
								resolve(response)		
							}
						})
					})
				}))
				.then(function() {
					console.log("*******\n\nFinished Updating Singapore \n\n*******\n\n")
					return
				})
			})

	.catch(handleError)
}



function handleError (error) {
	console.log("Error happend: ", error)
}



