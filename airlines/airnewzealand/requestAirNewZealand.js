 var https = require ("https");
 var fs = require('fs');


var requestAirNZ = function(date, destination) {
	var url = "http://www.airnewzealand.co.nz/entertainment/%month-year%/ex2/movies/201?des=%destination&%date=%day-month-year%"
	
	/*
	expected URL format: 

	http://www.airnewzealand.co.nz/entertainment/may-2016/ex2/movies/201?des=LAX&no=NZ2&date=11-May-2016
	date format:   14-April-2016

	*/

	//Changes to make to default URL
	var changes = {
		"%month-year%" : `${date.month}-${date.year}`,
		"%destination%": destination, 
		"%date=%day-month-year%": `${date.day}-${date.month}-${date.year}`
	}
	//edit URL
	for (var key in changes) {
		url = url.replace(key, changes[key])
	}
	
}

 var options = {
 	hostname: "en.wikipedia.org",
 	port:  443,
 	path: "/wiki/George_Washington",
 	method: "GET"
 };

var req = https.request(options, function(res) {
	//set var for response body
	var responseBody = "";

	console.log("Response from server started.");
	console.log(`Server Status:  ${res.statusCode} `);
	console.log("Response Headers: %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk) {
		console.log(chunk);

	});

	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	res.on("end", function() {
		fs.writeFile("George_Washington.html", responseBody, function(err) {
			if (err) {
				throw err;
			}

			console.log(" File Downloaded!")	;
		});

	});
});

req.on("error", function(err) {
	console.log(`Problem with request  ${err.message}`);

});

req.end();