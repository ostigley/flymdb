
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
		});
};

exports.addMovieIfNotExist = function (title, airline, callback) {
	knex('movies')
		.where('Title', title)
		.select('id')
		.then( function (resp) {
			if (isEmpty(resp)) {
				getMovie([title])
					.then(function (movieData) {
						addNewMovie(JSON.parse(movieData), 'movies')
					})
					.then(function (newId) {
						addMovieToAirline(newId[0], airline);
					})		
					.then( function (resp) {
						console.log(`New Movie Added to ${airline}: ${title} `);
						callback(null, resp);
					});
			} else {
				console.log("Already exists in movies.")
				addMovieToAirline(resp[0].id, airline)
					.then( function (resp) {
						callback(null, resp);
					})
			} 
		})
		.catch(handleError)
}

// ---------------helpers---------------------//

function addNewMovie (movieData, table) {
	return new Promise (function (resolve, reject) {
		knex(table)
		.insert(movieData)
		.then(function (resp) {
				resolve(resp);
		});
	});
}

function addMovieToAirline (movieId, airline) {
	return new Promise (function (resolve, reject) {
		if (movieNotInAirline(movieId, airline)) {
			addNewMovie({movieId: movieId}, airline)
				.then( function (resp) {
						console.log(`Movie id: ${movieId} added to airline movies: ${airline}`);
						resolve(resp);
				});
		} else {
			console.log(`Already exists in ${airline}`);
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
}
