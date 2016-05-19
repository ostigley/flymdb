var redtape = require('redtape')
var knexConfig = require('../../knexfile.js').development
var knex = require('knex')(knexConfig)
var dbFunctions = require('../../db_lib/db-functions.js')
var updateAirNewZealand = require('../../airlines/airnewzealand/update-anz-movie-db.js')

//Prepare database for testing: 
var test = redtape({
	beforeEach: function(callback) {
		knex = require('knex')(knexConfig)
		return knex.migrate.latest(knexConfig)
			.then(function () {
				console.log("migrated db's")
				return updateAirNewZealand()
					.then( function () {
						callback()
					})
			})
	},

	afterEach: function (callback) {
		return knex.migrate.rollback(knexConfig)
			.then(function () {
				// knex.destroy()
				callback()
			})
	}
})

var movieTitles = ['Kung Fu Panda 3', 'Deadpool', 'An Affair to Remember', 'Life of PI', '2001: A Space Odyssey']
var expectedTitles = ['Kung Fu Panda 3', 'Deadpool', 'An Affair to Remember']

test("Get all Air New Zealand movies, and add ratings to db", function (t) {

			dbFunctions.airlineMovies('airnewzealand', function (error, resp) {
			if (error) {
				console.log(error)
			} else {
				t.ok(resp.length>180, "Returns air nz movies")
				movieTitles.map(function(movie) {
					dbFunctions.findMovieInMovies(movie, function (error, movieDbResponse){
						dbFunctions.findMovieInAirline(movieDbResponse.id, 'airnewzealand', function (error, airlineDbResponse) {
							if (error) {
								console.log(error)
							} else {
								t.equal(airlineDbResponse.movieId, movieDbResponse.id, "Airline MovieId mateches movie.Id")
								t.equal(movieDbResponse.Title, movie, `Title added to movie Db is on air nz website: ${movieDbResponse.Title}`)
								t.end()
							}
						})
					})
				})
			}
	
		})	
})