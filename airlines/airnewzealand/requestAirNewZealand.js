var request = require('superagent')
var monthList = require('../../data/month-strings.js')
var getPage = require('../get-page.js')
var urlsArray = require('./data/urls')


module.exports= function() {
	var urls = urlsArray();

	console.log("Making multiple requests to Air NZ")
	//  various links that need to be visited at air nz: 
	return Promise.all(urls.map(getPage))
	.then(function (htmlArray) {
		return htmlArray.reduce(function(a,b) {
			return a + b
		},"")

	})
}

















