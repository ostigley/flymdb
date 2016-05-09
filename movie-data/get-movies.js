var request = require ('request')
var qs = require('query-string')

module.exports = function (title, doThisAfter) {
	var hostname = "http://www.omdbapi.com/?"
	// var moviePath = "t%title%&type=movie&tomatoes=true"

	var moviePath = {
		t: title,
		type: "movie",
		tomatoes: true
	}

	request(hostname+qs.stringify(moviePath), function doThisWithMovieData (err, response, body ) {
		if (err) {
			doThisAfter(err)
		} else {
			doThisAfter(err, JSON.parse(response["body"])) 
		}
	})

}



