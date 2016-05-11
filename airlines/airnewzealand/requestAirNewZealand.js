var monthList = require('../../data/month-strings.js')
var getPage = require('../get-page.js')
var urlsArray = require('./data/urls')

module.exports= function() {
	// for TESTING!!!!
	// var htmlArray = require('../../test/data/airNzhtmlArray.js')
	 // return new Promise ( function (resolve, reject) {
		// var htmlString = htmlArray.reduce(function(a,b) {
		// 			return a + b
		// 		},"")
	 // 	resolve(htmlString)
	 // })
		console.log("Requesting air new zealand")
		var urls = urlsArray();
		return Promise.all(urls.map(getPage))
			.then( function(htmlArray) {
				return htmlArray.reduce(function(a,b) {
					return a + b
				},"")
			})
}
	







