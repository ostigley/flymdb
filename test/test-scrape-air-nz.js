var test = require('tape');
var requestAirNewZealand = require('../airlines/airnewzealand/requestAirNewZealand.js');
var flights = require('../airlines/airnewzealand/airNzFlights.js');
var scrapeMovies = require('../airlines/airnewzealand/scrape-movies.js')


var dates = [
  {
    day: '21',
    month: 'May',
    year: '2016'
  }
]


test("Request Air NZ with different locations and dates", function(t) {

  // iterate through test dates and destinations

      requestAirNewZealand(dates[0], flights[0], function doThisAfterRequest(err, response, data) {
        if (err) {
          throw err
        } else {
          t.equal(200, response, "response code 200" )
          var movieArray = scrapeMovies(data)

          // t.ok(movieArray.length>20, "at least 20 movies retrieved")

        }
      });


      t.end()
})


