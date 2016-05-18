
var knex = require('knex')({
    client: 'sqlite3',
    connection: {
    filename: "./flymydb.sqlite"
	 },
	 useNullAsDefault: true
});
var getMovie = require('../movie-data/get-movies.js');


exports.airlineMovies = function (airline, callback) {
	knex('movies')
		.join(airline, 'movies.id', `${airline}.movieId`)
		.then( function (resp) {
			callback(null, resp);
		})
		.catch(handleError)
};

exports.addMovieIfNotExist = function (title, airline, callback) {
	knex('movies')
		.where('Title', title)
		.select('id')
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
						callback(null, resp);
					});
			} else {
				addMovieToAirline(resp[0].id, airline)
					.then( function (resp) {
						callback(null, resp);
					})
			} 
		})
		.catch(handleError)
}

exports.findMovieInMovies = function (movieName, callback) {
	knex('movies')
		.where('Title', movieName)
		.then( function (resp) {
			callback(null, resp)
		})
}

exports.findMovieInAirline = function (movieId, airline, callback) {
	knex(airline)
		.where('movieId', movieId)
		.select('movieId')
		.then( function (resp) {
			callback(null, resp)
		})
}

// ---------------helpers---------------------//

function addNewMovie (movieData, table) {
	return new Promise (function (resolve, reject) {
		knex(table)
		.insert(movieData)
		.then(function (resp) {
				resolve(resp);
		});
	})
		.then(function(resp) {
			return resp
		});
}

function addMovieToAirline (movieId, airline) {
	return new Promise (function (resolve, reject) {
		if (movieNotInAirline(movieId, airline)) {
			addNewMovie({movieId: movieId}, airline)
				.then( function (resp) {
						resolve(resp);
				});
		} else {
			resolve(movieId);
		}
	});
}

function movieNotInAirline (movieId, airline) {
	return new Promise (function (resolve, reject) {
		knex(airline)
			.where(`${airline}.movieId`, movieId)
			.then(function (resp) {
				resolve(!isEmpty(resp))
			})
	})
}

function isEmpty (array) {
	return array.length ===0;
}

function handleError (error) {
	console.log("Error happend: ", error)
	throw error
}
