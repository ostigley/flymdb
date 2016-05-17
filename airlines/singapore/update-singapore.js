var requestSingapore = require('./request-singapore.js')
var scrapeSingapore = require('./scrape-singapore.js')
var getMovies = require('../../movie-data/get-movies.js')

// requestSingapore not working because of non browser detection, so it us using fs readfile
requestSingapore()
	.then(scrapeSingapore)
	.then(getMovies)
	.then(console.log)
	.catch(handleError)


function handleError (error) {
	console.log("Error happend: ", error)
}
