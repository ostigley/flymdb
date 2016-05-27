var getMovie = require('../movie-data/get-movies.js');

module.exports = function (knex) {
	return {
		airlineMovies: airlineMovies,
		addMovieIfNotExist: addMovieIfNotExist,
		findMovieInMovies: findMovieInMovies,
		findMovieInAirline: findMovieInAirline,
		emptyTable: emptyTable
	}

	function airlineMovies (airline, callback) {
		knex('movies')
			.join(airline, 'movies.id', `${airline}.movieId`)
			.then(function (resp) {
				callback(null, resp);
			})
			.catch(handleError)
	};

	function deleteMovie (movieId) {
		knex('movies')

	}


	function addMovieIfNotExist (title, airline, callback) {
		doesMovieExist(title)
			.then(function yes(resp) {
				addNewMovie({movieId: resp.id}, airline)
					.then(function (resp) {
						console.log("Movie added -already in Movies: ", title)

						callback(null, [resp[0].id]);
					})
			}, function no(resp) {
				getMovie([title])
					.then(function (apiData) {
						return addNewMovie(apiData[0], 'movies')
					})
					.then(function (movieId) {
					 	return addNewMovie({movieId: movieId[0].id}, airline)
					})
					.then(function (resp) {
						// resp is [1] the airline movie id.  not the airline movieId
						console.log("Movie added: ", title)
						callback(null, [resp[0].id]);
					});
			})
			.catch(handleError)
	}


	function doesMovieExist (title) {

		return new Promise ( function (resolve, reject) {
			findMovie(title)
				.then(function (resp) {
					if (isEmpty(resp)) {
						reject()
					} else {
						resolve(resp[0])
					}
				})
		})
	}



	function emptyTable(table) {
		console.log("Emptying, ", table)
		return knex(table)
			.del()
	}

	function addNewMovie (movieData, table) {
		return knex(table)
			.returning(['id'])
			.insert(movieData)
			.catch(handleError)
	}

	function addNewToMovies (movieData) {
		return knex('movies')
			// .returning('id')
			.insert(movieData)
	}

	function findMovie (title) {
		return knex('movies')
			.where('Title', 'like', title) //like introduced to cater for case sensitive bugs
			.select('id')
	}

	function findMovieInMovies (movieName, callback) {
		knex('movies')
			.where('Title', movieName)
			.then(function (resp) {
				callback(null, resp)
			})
	}

	function findMovieInAirline (movieId, airline, callback) {
		return knex(airline)
			.where({movieId: movieId})
			.select('movieId')
			.then(function (resp) {
				callback(null, resp)
			})
	}

	function movieNotInAirline (movieId, airline) {
		return knex(airline)
			.where(`${airline}.movieId`, movieId)
			.then(function (resp) {
				return (isEmpty(resp))
			})
	}

	function addMovieToAirline (movieId, airline) {
		addNewMovie({movieId: movieId}, airline)
			.then(function (resp) {
				// Response is [airline.id], not airline.movieId
					resolve( resp);
			});
				
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
