var cheerio = require('cheerio')

module.exports = function (html) {
	console.log("html length: ", html.length)
	//parse html data in Cheerio module
	$ = cheerio.load(html, {
	    withDomLvl1: true,
	    normalizeWhitespace: true,
	    xmlMode: false,
	    decodeEntities: true
	});
	
	// create possible movies array , and push all <p> as potential movies
	var possibleMovies = []
	var titles = $('p')
	for (var i = 0 ; i<titles.length; i++) {
		var movie = titles[i].children[0].data
		if (movie !== undefined && movie !== ' ') {
			possibleMovies.push(movie);
		}
	}
	
	console.log(`Scraped: ${titles.length} movies`)
	return possibleMovies
};;


