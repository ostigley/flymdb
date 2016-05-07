 var https = require ("https");
 var fs = require('fs');


module.exports= 
var getAirNewZealand = function(date, destination, flight) {
	var path = "/entertainment/%month-year%/ex2/movies/201?des=%destination%&%flight%&date=%day-month-year%"
	
	www.airnewzealand.co.nz/entertainment/may-2016/ex2/movies/201?des=LAX&no=NZ2&date=11-May-2016

	/*
	expected URL format: 

	http://www.airnewzealand.co.nz/entertainment/may-2016/ex2/movies/201?des=LAX&no=NZ2&date=11-May-2016
	date format:   14-April-2016

	 http://www.airnewzealand.co.nz/entertainment/May-2016/ex2/movies/201?des=%destination%&16-May-2016


	*/

	//Changes to make to default URL
	var changes = {
		"%month-year%" : `${date.month}-${date.year}`,
		"%destination%": destination, 
		"%date=%day-month-year%": `${date.day}-${date.month}-${date.year}`
		"%flight%": `no=${flight}`
	}
	//edit URL
	for (var key in changes) {
		path = path.replace(key, changes[key])
	}
	
	console.log(url)

	var options = {
		hostname: "http://www.airnewzealand.co.nz",
		port:  443,
		path: path,
		method: "GET"
	}


	var req = http.request(options, function(res) {
		var responseBody = "";
		res.setEncoding = "UTF-8"

		res.on("data", function(chunk) {

			responseBody += chunk;
		})

		res.on("end", function(){

			fs.writeFile("../flymdb/airlines/airnewzealand/data/${}")

		})



	})





	
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

	// console.log("Response from server started.");
	// console.log(`Server Status:  ${res.statusCode} `);
	// console.log("Response Headers: %j", res.headers);

	res.setEncoding("UTF-8");

	// res.once("data", function(chunk) {
	// 	console.log(chunk);

	// });

	res.on("data", function(chunk) {
		// console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	res.on("end", function() {
		fs.writeFile(`../flymdb/airlines/airnewzealand/data/${Math.random()+1}.html`, responseBody, function(err) {
			if (err) {
				throw err;
			}

		});

	});
});

req.on("error", function(err) {
	console.log(`Problem with request  ${err.message}`);

});

req.end();

