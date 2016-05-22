// helper function for air NZ to remove repeats and error messages in movie possibleMovies

module.exports = function removeRepeats (possibleMovies) {
	for(var i=0; i<possibleMovies.length; i++) {
		if (possibleMovies.indexOf(possibleMovies[i]) !== possibleMovies.lastIndexOf(possibleMovies[i])) {
			possibleMovies.splice(possibleMovies.lastIndexOf(possibleMovies[i]),1)
			return removeRepeats(possibleMovies);
		}
	}
	var extras = [" ", undefined, 'We don\'t have any content matching your selection', '11.22.63']
	extras.map(function(extra) {
		possibleMovies.splice(possibleMovies.indexOf(extra), 1)
	})
	console.log("Filtered movies: ", possibleMovies.length)
	return possibleMovies.sort()
};


//use this array as a test:  var testArray = require('../../test/helpers/test-movie-array.js')
