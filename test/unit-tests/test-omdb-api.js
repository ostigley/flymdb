var test = require('tape')
var getMovies = require ('../../movie-data/get-movies.js')

var moviesArray = [ '45 Years', 'A Cry in the Dark', 'A Nightmare on Elm Street']
test("test omdb api response ", function(t) {
    var expectedMovies = [ '45 Years', 'A Cry in the Dark', 'A Nightmare on Elm Street']
    getMovies(moviesArray)
		.then( function (movieObjectsArray) {
			movieObjectsArray.forEach(function (movie, index) {
                movie = JSON.parse(movie)
				t.equal(movie.Title, expectedMovies[index], `API movie title is same as requested: ${movie.Title}`)
			})
		})
	t.end()
})


test("test omdb api response ", function(t) {
    var moviesArray = [ 'No Such Movie']
    var expectedMovies = [ 'No Such Movie']
    getMovies(moviesArray)
        .then( function (movieObjectsArray) {
            var movie = JSON.parse(movieObjectsArray[0])
            t.equal(movie.Title, expectedMovies[0], "API movie title is same as requested")
        })
    t.end()
})
// // extra test here on bad response from api. 