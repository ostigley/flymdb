var test = require('tape')
var getMoviesApi = require ('../movie-data/get-movies.js')
var moviesArray = [ '45 Years', 'A Cry in the Dark', 'A Nightmare on Elm Street']

test("test omdb api response ", function(t) {
	getMoviesApi(moviesArray, function doThisWithApiResponse (err, response, movie) {
		if (err) {
			throw err
		} else {
			t.equal(response["Title"],movie,"Movie title returned from API is as expected") 
		}
	})
})
