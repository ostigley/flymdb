var test = require('tape');
var requestAirNewZealand = require('../airlines/airnewzealand/requestAirNewZealand.js');
var flights = require('../airlines/airnewzealand/airNzFlights.js');



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


// test("Request Air NZ with different locations and dates", function(t) {

// 	// iterate through test dates and destinations
// 	for (var i=0 ; i< flights.length; i++ ) {
// 		for (var j=0 ; j< dates.length; j++ ) {
// 			requestAirNewZealand(dates[j], flights[i], function doThisAfterRequest(err, response, data) {
// 				if (err) {
// 					throw err
// 				} else {
// 					t.equal(200, response, "response code 200" )
// 				}
// 			});
// 		}
// 	}
// 			t.end()
// })


