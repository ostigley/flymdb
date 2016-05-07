var test = require('tape');
var requestAirNewZealand = require('../airlines/airnewzealand/requestAirNewZealand.js');
var flights = require('../airlines/airnewzealand/airNzFlights.js');
var scrapeMovies = require('../airlines/airnewzealand/scrape-movies.js')


test("Request Air NZ with different locations and dates", function(t) {

  // iterate through test dates and destinations

      requestAirNewZealand(function doThisAfterRequest(err, response, data) {
        if (err) {
          throw err
        } else {
          t.equal(200, response, "response code 200" )
          var movieArray = scrapeMovies(data)
          console.log(movieArray)

        }
      });


      t.end()
})


