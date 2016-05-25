var redtape = require('redtape')

var knexConfig = require('../../knexfile.js').test  // declaires db environment
var knex = require('knex')(knexConfig) // sets up knex with environment config. 

var dbFunctions = require('../../db_lib/db-functions.js')  // pulls in our db functions
var db = dbFunctions(knex)  // decalres our db functions with knex environment

//Prepare database for testing: 
var test = redtape({
	beforeEach: function(callback) {
		return knex.migrate.latest()
			.then(function () {
				return knex.seed.run()
				.then( function () {
					callback()
				})
			})
	},

	afterEach: function (callback) {
		return knex.migrate.rollback()
			.then(function () {
				// knex.destroy()
				callback()
			})
	}
})


// test show movies for airlinen function
test ('Should return a list of movies from airNz', function (t) {
	db.airlineMovies('airnewzealand', function (error, resp) {
		if (error) {
			console.log(error)
		} else {
			t.equal(resp.length, 2, "Returns air nz movies")
			t.deepEqual(resp[0].Title,'Captain America: Civil War', "Movie in air new zealand is correct" )
			t.end()
		}
	})
})

test ('Should return a list of movies from SingaporeAir', function (t) {
	db.airlineMovies('singapore', function (error, resp) {
		if (error) {
			console.log(error)
		} else {
				t.equal(resp.length, 2, "Returns air nz movies")
			t.deepEqual(resp[0].Title,'X-Men: The Last Stand', "Movie in air new zealand is correct" )
			t.end()
		}
	})
})


//test add new movie to movie and airline database
test('Should add a new movie title to the movie database and the singapore DB', function (t) {
	var newMovie = 'Back to the Future'
	db.addMovieIfNotExist(newMovie, 'singapore', function (error, newId) {
		db.findMovieInMovies(newMovie, function (error, resp) {
			t.ok(resp[0].id === 4, 'Movie should be the 4th in the airline db')
			t.equal(resp[0].Title, newMovie, "Added movie is in movie database")
			t.equal(typeof newId[0], 'number', 'Response from airline db is an id number')
			db.findMovieInAirline(resp[0].id, 'singapore', function (error, movieId) {
				t.ok(movieId[0].movieId === resp[0].id, "Movie added to airline is correct movie")
				t.end()
			})
		})
	})
})


test('Should add a new movie title to the movie database and the airNZ DB', function (t) {
	var newMovie = 'Back to the Future'
	db.addMovieIfNotExist(newMovie, 'airnewzealand', function (error, newId) {
		db.findMovieInMovies(newMovie, function (error, resp) {
			t.ok(resp[0].id === 4, 'Movie should be the 4th in the airline db')
			t.equal(resp[0].Title, newMovie, "Added movie is in movie database")
			t.equal(typeof newId[0], 'number', 'Response from airline db is an id number')
			db.findMovieInAirline(resp[0].id, 'airnewzealand', function (error, movieId) {
				t.ok(movieId[0].movieId === resp[0].id, "Movie added to airline is correct movie")
				t.end()
			})
		})
	})
})


test('Should add movie already in DB in to Singapore DB', function (t) {
	var newMovie = 'Captain America: Civil War'  //already in db, but not singapore
	db.addMovieIfNotExist(newMovie, 'singapore', function (error, resp) {
		t.ok(typeof resp[0] === 'number', "Response from airline db is an id number")
			db.findMovieInMovies(newMovie, function (error, resp) {
				db.findMovieInAirline(resp[0].id, 'singapore', function (error, movieId) {
					t.ok(resp[0].id === movieId[0].movieId, 'Movie added to airline is correct movie')
					t.end()
				})
			})
	})
})

test('Should add movie already in DB in to Air NZ DB', function (t) {
	var newMovie = 'Youth'  //already in db, but not singapore
	db.addMovieIfNotExist(newMovie, 'airnewzealand', function (error, resp) {
		t.ok(typeof resp[0] === 'number', "Response from airline db is an id number")
			db.findMovieInMovies(newMovie, function (error, resp) {
				db.findMovieInAirline(resp[0].id, 'airnewzealand', function (error, movieId) {
					t.ok(resp[0].id === movieId[0].movieId, '16 Movie added to airline is correct movie')
					t.end()
				})
			})
	})
})

// test('*** should cleanes db of un-used movies ***', function (t) {
// 	db.cleanesDB()
// 		.then(function () {
// 			findMovieInMovies('20', function (undefined, resp) {
// 				t.ok(resp.length === 0)
// 			})
// 		})
// })

// test('Should not add movie already in both databases: Air NZ', function (t) {
// 	var newMovie = 'Captain America: Civil War'  //already in db, but not singapore
// 	db.addMovieIfNotExist(newMovie, 'airnewzealand', function (error, resp) {
// 		t.ok(typeof resp === 'number', "Response from airline db is a movie.id number")
// 			db.findMovieInMovies(newMovie, function (error, resp) {
// 				db.findMovieInAirline(resp[0].id, 'airnewzealand', function (error, movieId) {
// 					t.ok(resp.length === 1, "Only one entry in movies db for this movie")
// 					t.ok(movieId.length === 1, "Only one entry in airline db for this movie")
// 					t.ok(resp[0].id === movieId[0].movieId, 'Movie in airline is the same one in the database, and has not been added twice.')
// 					t.end()
// 				})
// 			})
// 	})
// })













