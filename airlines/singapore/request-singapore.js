// var getPage = require('../get-page.js')
// var request = require('request')


var fs = require('fs')

module.exports = function() {
	// return new Promise (function (resolve, reject) {
	// 	getPage("http://www.singaporeair.com/en_UK/nz/flying-withus/entertainment/movies/")
	// }
	
	return new Promise (function (resolve, reject) {
		fs.readFile(__dirname + "/data/may-html.html", "utf-8", function (err, html) {
			if (err) {
				reject(err)
			}	else {
				resolve (html)
			}
		})
	})
}

