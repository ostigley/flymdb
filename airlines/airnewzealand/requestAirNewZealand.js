 var http = require ("http");
 var fs = require('fs');
 var request = require('request')


module.exports= function(date, flight, doThisAfterRequest) {
	var path = "/entertainment/%month-year%/ef2/movies/201?%flight%&date=%day-month-year%"

	/*
	expected path format:
	http://www.airnewzealand.co.nz/entertainment/may-2016/ex2/movies/201?des=LAX&no=NZ2&date=11-May-2016
	date format:   14-April-2016
	http://www.airnewzealand.co.nz/entertainment/May-2016/ex2/movies/201?des=%destination%&16-May-2016
	*/



	//Changes to make to default path
	var changes = {
		"%month-year%" : `${date.month}-${date.year}`,
		"%day-month-year%": `${date.day}-${date.month}-${date.year}`,
		"%flight%": `no=${flight}`
	}
	//edit URL
	for (var key in changes) {
		path = path.replace(key, changes[key])
	}

	var options = {
		hostname: "http://www.airnewzealand.co.nz",
		port:  443,
		path: path,
		method: "GET"
	}
	console.log(options.hostname+path)

	request(options.hostname+path, function(err, response, body) {
		if(err) {
			doThisAfterRequest(err)
		} else {
			doThisAfterRequest(err, response.statusCode, body)
		}
	})
}

















