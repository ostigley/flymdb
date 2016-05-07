 var http = require ("http");
 var fs = require('fs');
 var request = require('request')
 var monthList = require('../../data/month-strings.js')

module.exports= function(doThisAfterRequest) {
	var hostname= "http://www.airnewzealand.co.nz/entertainment";
	var path = "/%month%-%year%/all/movies/201";
	var d = new Date();

	var changes = {
		"%month%": monthList[d.getMonth()],
		"%year%": d.getFullYear()
	}
	//edit URL
	for (var key in changes) {
		path = path.replace(key, changes[key])
	}
	console.log("Requesting URL: ", hostname + path)
	

	request(hostname + path, function(err, response, body) {
		if(err) {
			doThisAfterRequest(err)
		} else {
			doThisAfterRequest(err, response.statusCode, body)
		}
	})
}

















