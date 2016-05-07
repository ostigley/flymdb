var test = require('tape');
var requestAirNewZealand = require('../airlines/airnewzealand/requestAirNewZealand.js');
var flights = require('../airlines/airnewzealand/airNzFlights.js');
var scrapeMovies = require('../airlines/airnewzealand/scrape-movies.js')


test("Request Air NZ with different locations and dates", function(t) {

  // iterate through test dates and destinations


          var movies = []
          var count = 0
      requestAirNewZealand(function doThisAfterRequest(err, response, data) {
        if (err) {
          throw err
        } else {
          scrapeMovies(data, function doThisWtihMovies (movieArray) {
            movieArray.map(function(movie) {
              movies.push(movie)
            })
            count++
            if(count === 27) {


              console.log(movies)
            }
          })
        }
      });


      t.end()
})
