
var knex = require('knex')({
    client: 'postgresql',
    client: 'sqlite3',
    connection: {
    filename: "./flymydb.sqlite"
	 }
});
var getMovie = require('../movie-data/get-movies.js');
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
			callback(null, resp);
		});
};

function addNewMovie (movieData) {
	return new Promise (function (resolve, reject) {
		knex('movies')
		.insert(JSON.parse(movieData))
		.then(function (response) {
				resolve(response);
		});
	});
}

function addMovieToAirline (movieId, airline) {
	return new Promise (function (resolve, reject) {
		knex(airline)
			.insert({movieId: movieId})
			.then( function (airlineResponse) {
					console.log(`Movieid: ${movieId} added to airline movies: ${airlineResponse[0]}`);
					resolve(airlineResponse);
			});
	});
}

function isMovieInAirline (movieId, airline) {
	return new Promise (function (resolve, reject) {
		knex(airline)
		.where('movieId', movieId.id)
		.then(function (response) {
			if (response.length === 0) {
				resolve(false)
			} else {
				resolve(true)
			}
		})
	})
}

 function addMovieIfNotExist (title, airline, callback) {
	knex('movies')
		.where('Title', title)
		.select('id')
		.then( function (resp) {
			if (resp.length === 0) {
				getMovie([title])
					.then(addNewMovie)
					.then(function (newId) {
						return addMovieToAirline(newId[0], airline);
					})		
					.then( function (resp) {
						console.log("New Movie Added: ", title);
						callback(null, resp);
					});
			} else {
				addMovieToAirline(resp[0], airline)
					.then( function (resp) {
						console.log(`Existing movie added to airline, movie id:${resp}`);
						callback(null, resp);
					})
			} 
		})
}

addMovieIfNotExist('Captain America: Civil War', 'airnewzealand', function (undefined, response) {
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