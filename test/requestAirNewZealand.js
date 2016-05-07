var test = require('tape');
var fs = require('fs');
var requestAirNewZealand = require('../airlines/airnewzealand/requestAirNewZealand.js');
var destinations = require('../airlines/airnewzealand/destinations.js');
var path = require('path')
var countFiles = require('./helpers/countfiles.js')



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





test("Request Air NZ with different locations and dates", function(t) {

	//iterate through test dates and destinations
	// for (var i=0 ; i< destinations.length; i++ ) {
	// 	for (var j=0 ; j< dates.length; j++ ) {
			

			var countBefore = countFiles("../flymdb/airlines/airnewzealand/data/") 
			requestAirNewZealand(dates[0], destinations.makeDes(destinations.destinations[0]) ) ; 

			setTimeout(function(){


			t.equal(countBefore+1 ,countFiles("../flymdb/airlines/airnewzealand/data/"), "file count increases by one" )

				
			}, 3000)


	// 	}
	// }
			t.end()
})


