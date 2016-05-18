var redtape = require('redtape')
var dbConfig = require('./db-config.js')
var knex = dbConfig
// var config = dbConfig.config
var dbFunctions = require('../db_lib/db-functions.js')

//Prepare database for testing: 

var test = redtape({
	beforeEach: function(callback) {
		return knex.migrate.latest()
			.then(function () {
				return knex.seed.run()
				.then( function () {
					console.log("Migrated and seed db's")
					callback()
				})
			})
	},

	afterEach: function (callback) {
		return knex.migrate.rollback()
			.then(function () {
				console.log("Rolledback after test")
				callback()
			})
	}
})


// test show movies for airlinen function
test ('Should return a list of movies from airNz', function (t) {
	dbFunctions.airlineMovies('airnewzealand', function (error, resp) {
		if (error) {
			console.log(error)
		} else {
			t.equal(resp.length, 2, "Returns air nz movies")
			t.deepEqual(resp[0].Title,'Captain America: Civil War', "movie in air new zealand is correct" )
		}
	})
	t.end()
})

test ('Should return a list of movies from SingaporeAir', function (t) {
	dbFunctions.airlineMovies('singapore', function (error, resp) {
		if (error) {
			console.log(error)
		} else {
			t.equal(resp.length, 2, "Returns air nz movies")
			t.deepEqual(resp[0].Title,'X-Men: The Last Stand', "movie in air new zealand is correct" )
		}
	})
	t.end()
})

// test ('Should return error if airline not exist', function (t) {
// 	dbFunctions.airlineMovies('ABC', function (err, resp) {
// 		if (err) {
// 			t.error(err)
// 		} 
// 	})
// 	t.end()
// })

//test add new movie to movie and airline database
test('Should add a new movie title to the movie database and the airline', function (t) {
	var newMovie = 'Back to the Future'
	dbFunctions.addMovieIfNotExist(newMovie, 'singapore', function (error, resp) {
		dbFunctions.findMovieInMovies(newMovie, function (error, resp) {
			t.equal(resp[0].Title, newMovie, "Added movie is in movie database")
		})
	t.end()
	})

})







