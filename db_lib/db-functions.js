
var knex = require('knex')({
    client: 'postgresql',
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

function addNewMovie (movieData, table) {
	return new Promise (function (resolve, reject) {
		knex(table)
		.insert(movieData)
		.then(function (response) {
				resolve(response);
		});
	});
}

function addMovieToAirline (movieId, airline) {
	return new Promise (function (resolve, reject) {
		if (movieNotInAirline(movieId, airline)) {
			addNewMovie({movieId: movieId}, airline)
				.then( function (airlineResponse) {
						console.log(`Movie id: ${movieId} added to airline movies: ${airline}`);
						resolve(airlineResponse);
				});
		} else {
			console.log(`Already exists in ${airline}`)
			resolve(movieId)
		}
	});
}

function movieNotInAirline (movieId, airline) {
	return new Promise (function (resolve, reject) {
		knex(airline)
			.where(`${airline}.movieId`, movieId)
			.then(function (response) {
				resolve(!isEmpty(response))
			})
	})
}
function isEmpty (array) {
	return array.length ===0
}


function addMovieIfNotExist (title, airline, callback) {
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

function handleError (error) {
	console.log("Error happend: ", error)
}

addMovieIfNotExist('Mission: Impossible - Ghost Protocol', 'singapore', function (undefined, response) {
	console.log("Finished")
})




















var movieData = { Title: 'Captain America: Civil War',
  Year: '2016',
  Rated: 'PG-13',
  Released: '06 May 2016',
  Runtime: '146 min',
  Genre: 'Action, Adventure, Sci-Fi',
  Director: 'Anthony Russo, Joe Russo',
  Writer: 'Christopher Markus (screenplay), Stephen McFeely (screenplay), Mark Millar (comic book), Joe Simon (characters), Jack Kirby (characters)',
  Actors: 'Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan',
  Plot: 'Political interference in the Avengers\' activities causes a rift between former allies Captain America and Iron Man.',
  Language: 'English',
  Country: 'USA',
  Awards: 'N/A',
  Poster: 'http://ia.media-imdb.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg',
  Metascore: '84',
  imdbRating: '8.2',
  imdbVotes: '6,493',
  imdbID: 'tt3498820',
  Type: 'movie',
  tomatoMeter: '94',
  tomatoImage: 'fresh',
  tomatoRating: '8.5',
  tomatoReviews: '18',
  tomatoFresh: '17',
  tomatoRotten: '1',
  tomatoConsensus: 'N/A',
  tomatoUserMeter: 'N/A',
  tomatoUserRating: 'N/A',
  tomatoUserReviews: '97211',
  tomatoURL: 'http://www.rottentomatoes.com/m/captain_america_civil_war/',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'Walt Disney Pictures',
  Website: 'http://marvel.com/captainamerica#/home',
  Response: 'True' }