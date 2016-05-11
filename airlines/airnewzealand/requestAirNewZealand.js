var monthList = require('../../data/month-strings.js')
var getPage = require('../get-page.js')
var urlsArray = require('./data/urls')
var htmlArray = require('../../test/data/airNzhtmlArray.js')

module.exports= function() {
	 return new Promise ( function (resolve, reject) {
		var htmlString = htmlArray.reduce(function(a,b) {
					return a + b
				},"")
	 	resolve(htmlString)
	 })
		
		// var urls = urlsArray();
		// return Promise.all(urls.map(getPage))
		// 	.then( function(htmlArray) {
		// 		return htmlArray.reduce(function(a,b) {
		// 			return a + b
		// 		},"")

		// 	})
	//  various links that need to be visited at air nz: 

}
	




	// return Promise.all(urls.map(getPage))


			











