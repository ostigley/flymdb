var cheerio = require('cheerio')

module.exports = function (webdata, doThisWithNewMovies) {
	console.log("scraping movie titles from string of length ", webdata.length)
	//parse html data in Cheerio module
	$ = cheerio.load(webdata, {
	    withDomLvl1: true,
	    normalizeWhitespace: true,
	    xmlMode: false,
	    decodeEntities: true
	});
	
	// create possible movies array , and push all <p> as potential movies
	var possibleMovies = []
	for (var i = 0 ; i<$('p').length; i++) {
		var movie = $('p')[i].children[0].data
		if (movie !== undefined || movie !== ' ') {
			possibleMovies.push(movie);
			console.log($('p').length, i)
		}
	}
	
	doThisWithNewMovies(possibleMovies)
};;


