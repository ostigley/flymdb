var request = require ('request')
var qs = require('query-string')
var getPage = require('../airlines/get-page.js')

module.exports = function (titlesArray) {
	var hostname = "http://www.omdbapi.com/?"

	titlesArray.map(function(title, index) {
		var moviePath = {
			t: title,
			type: "movie",
			tomatoes: true
		}
		titlesArray[index] = hostname+qs.stringify(moviePath)
	})
	return Promise.all((titlesArray.map(getPage)))
}



