var monthList = require('../../data/month-strings.js')
var getPage = require('../get-page.js')
var urlsArray = require('./data/urls')

module.exports= function() {
	console.log("Requesting air new zealand")
// 	var urls = urlsArray();
// 	return Promise.all(urls.map(getPage))
// 		.then( function(htmlArray) {
// 			return htmlArray.reduce(function(a,b) {
// 				return a + b
// 			},"")
// 		})
	// for TESTING!!!!
	var htmlArray = require('../../test/data/airNzhtmlArray.js')
	 return new Promise ( function (resolve, reject) {
		var htmlString = htmlArray.reduce(function(a,b) {
					return a + b
				},"")
		console.log(htmlString.length)
	 	resolve(htmlString)
	 })
	


}





