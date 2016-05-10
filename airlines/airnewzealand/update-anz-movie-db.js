var requestAnz = require('./requestAirNewZealand.js')
var scrapeMovies = require('./scrape-movies.js')
var getMovieRatings = require('./../../movie-data/get-movies.js')
var noRepeats = require('./no-airNz-repeats.js')
var fs = require('fs')

// get movies from air new zealand, send callback as 


requestAnz()
	.then(function(htmlArray) {
		return noRepeats(scrapeMovies(htmlArray))
	})
	.then( function(movieTitles) {
		console.log(movieTitles.length)
	})
	.catch(handleError)



function Movie (Title, Genre, Plot, Language, Metascore, imdbRating, imdbVotes, imdbID) {
	this.Title = Title;
	this.Genre = Genre;
	this.Plot = Plot;
	this.Language = Language;
	this.Metascore = Metascore; 
	this.imdbRating = imdbRating;
	this.imdbVotes = imdbVotes;
	this.imdbID= imdbID;
	this.airline = "Air New Zealand"
}

function handleError (error) {
	if (error) {
		throw error
	}
}






/*

{"Title":"The Matrix","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving","Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.","Language":"English","Country":"USA, Australia","Awards":"Won 4 Oscars. Another 33 wins & 44 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX300.jpg","Metascore":"73","imdbRating":"8.7","imdbVotes":"1,185,648","imdbID":"tt0133093","Type":"movie","Response":"True"}


*/