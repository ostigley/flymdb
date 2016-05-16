var getPage = require('../get-page.js')
// var request = require('request')
var fs = require('fs')

var thisMonth = "http://www.singaporeair.com/en_UK/nz/flying-withus/entertainment/movies/"
var nextMonth = "http://www.singaporeair.com/en_UK/nz/flying-withus/entertainment/movies/next-month/"


module.exports = function() {
	return getPage({url: thisMonth, followAllRedirects: true, jar: true})
	}



