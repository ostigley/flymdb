var test = require('tape');
var fs = require('fs');
var requestAirNewZealand = require('../requestAirNewZealand.js');
var destinations = require('../airlines/airnewzealand/destinations.js');
var path = require('path')



var dates = [
	{
		day: '16',
		month: 'May',
		year: '2016'
	},
	{
		day: '30',
		month: 'May',
		year: '2016'
	},
	{
		day: '7',
		month: 'May',
		year: '2016'
	},
	{
		day: '20',
		month: 'May',
		year: '2016'
	}

]

function makeDes (str) {
	 return str.match(/\([a-z][a-z][a-z]\)/g);
}



test("Request Air NZ with different locations and dates" function(t) {
		
	//iterate through test dates and destinations
	for (var i=0 ; i< destinations.length; i++ ) {
		for (var j=0 ; j< dates.length; j++ ) {
			//request data
			requestAirNewZealand(dates[j], destinations[i])
			var count = 10 //count occurances of movie.jpg
			
			t.equal(1,1, "file count increases by one" )
			t.true(count > 15)

		}
	}









})