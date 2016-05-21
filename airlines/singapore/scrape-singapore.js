var cheerio = require('cheerio')

module.exports = function (html) {
	var possibleMovies = []

	function scrape2 (titlesArray) {
		for (var i = 0 ; i<titlesArray.length; i++) {
			var movie = titlesArray[i].children[0].data
			if (movie !== undefined && movie !== ' ') {
				possibleMovies.push(movie);
			}
		}
	}

	console.log("html length: ", html.length)
	//parse html data in Cheerio module
	$ = cheerio.load(html, {
	    withDomLvl1: true,
	    normalizeWhitespace: true,
	    xmlMode: false,
	    decodeEntities: true
	});
	
	scrape2($('strong'))
	scrape2($('h2.popup__heading'))
	console.log(`Scraped: ${possibleMovies.length} movies`)
	return possibleMovies
};





