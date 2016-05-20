var getPage = require('../get-page.js')

var thisMonth = "http://www.singaporeair.com/en_UK/nz/flying-withus/entertainment/movies/"
var nextMonth = "http://www.singaporeair.com/en_UK/nz/flying-withus/entertainment/movies/next-month/"


module.exports = function() {
	return getPage({url: thisMonth, followAllRedirects: true, jar: true})
}



 // For Testing below this line. 

// var singaporeHtml = require ('../../test/data/singaporehtml.js')
// module.exports = function () {
// 	return new Promise (function (resolve, reject) {
// 		return resolve(singaporeHtml)
// 	})
// }




