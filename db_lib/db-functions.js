var getMovie = require('../movie-data/get-movies.js');
module.exports = function (knex) {
	return {
		airlineMovies: airlineMovies,
		addMovieIfNotExist: addMovieIfNotExist,
		findMovieInMovies: findMovieInMovies,
		findMovieInAirline: findMovieInAirline
	}

	function airlineMovies (airline, callback) {
		knex('movies')
			.join(airline, 'movies.id', `${airline}.movieId`)
			.then( function (resp) {
				callback(null, resp);
			})
			.catch(handleError)
	};

	function addMovieIfNotExist (title, airline, callback) {
		
		findMovie(title)
			.then( function (resp) {
				if (isEmpty(resp)) {
					getMovie([title])
						.then(function (movieData) {
							return addNewMovie(JSON.parse(movieData), 'movies')
						})
						.then(function (newId) {
							return addMovieToAirline(newId[0], airline);
						})		
						.then(function (resp) {
							// resp is [1] the airline movie id.  not the airline movieId
							console.log("Movie added: ", title)
							callback(null, resp);
						});
				} else {

					return addMovieToAirline(resp[0].id, airline)
						.then( function (resp) {
							// response is [airline.id], or movie.id
							console.log("Movie alredy in db: ", title)
							callback(null, resp);
						})
				} 
			})
			.catch(handleError)
	}

	function findMovie (title) {
		return knex('movies')
			.where('Title', 'like', title) //like introduced to cater for case sensitive bugs
			.select('id')
	}

	function findMovieInMovies (movieName, callback) {
		knex('movies')
			.where('Title', movieName)
			.then( function (resp) {
				callback(null, resp)
			})
	}

	function findMovieInAirline (movieId, airline, callback) {
		knex(airline)
			.where('movieId', movieId)
			.select('movieId')
			.then( function (resp) {
				callback(null, resp)
			})
	}

	function addNewMovie (movieData, table) {
		return knex(table)
			.insert(movieData)
	}

	function movieNotInAirline (movieId, airline) {
		return knex(airline)
			.where(`${airline}.movieId`, movieId)
			.then(function (resp) {
				return (isEmpty(resp))
			})
	}

	function addMovieToAirline (movieId, airline) {
		return new Promise (function (resolve, reject) {
			movieNotInAirline(movieId, airline)
				.then( function (resp) {
					if (resp) {
						addNewMovie({movieId: movieId}, airline)
							.then( function (resp) {
								// Response is [airline.id], not airline.movieId
									resolve( resp);
							});
					} else {
						//Response is original movie.id
						resolve( movieId);
					}
				})
		})
	}
	
}



// ---------------helpers---------------------//


function isEmpty (array) {
	// console.log(array)
	return array.length === 0;
}

function handleError (error) {
	console.log("Error happend: ", error)
	throw error
}
