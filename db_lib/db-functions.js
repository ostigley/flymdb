var getMovie = require('../movie-data/get-movies.js')
/*
functions to write: 
	get airline movies 
	doesMovieExist - check if movie is already in movies table - takes title, returns true or false .
	add movie




*/

exports.airlineMovies = function (airline, callback) {
	knex('movies')
		.join(airline, 'movies.id', `${airline}.movieId`)
		.then( function (resp) {
			callback(null, resp)
		})
}

exports.addMovieIfNotExist = function (title, airine, callback) {
	knex('movies')
		.where('Title', title)
		.then( function (resp) {
			if (resp.length === 0) {
				getMovie([title])
					.then(function (resp) {
						knex('movies')
							.insert(JSON.pars(resp))
							.then(function (resp) {
								knex(airline)
									.insert({movieId: resp[0]})
									.then( function (resp) {
										console.log("New Movie Added: ", title)
										callback(null, resp)
									})
							})
					})
			} else {
				knex(airline)
					.insert({movieId: resp[0].id})
					.then( function (resp) {
						console.log("Existing movie added to airline DB: ", title)
						callback(null, resp)
					})
			}
		})
}