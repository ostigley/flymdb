var cheerio = require('cheerio')

module.exports = function (webdata) {
	$ = cheerio.load(webdata, {
    withDomLvl1: true,
    normalizeWhitespace: true,
    xmlMode: false,
    decodeEntities: true
});
	
	var possibleMovies = [];
	for (var i = 0 ; i<$('p').length; i++) {
		var movie = $('p')[i].children[0].data
		if (movie != undefined) {
			possibleMovies.push(movie);
		}
	}
	possibleMovies.shift()
	possibleMovies.pop()
	return possibleMovies
};


//scarpe("<p>How To Be Single</p><p>Second Time lucky</p>")