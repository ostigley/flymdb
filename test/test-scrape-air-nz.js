var test = require('tape');
var requestAirNewZealand = require('../airlines/airnewzealand/requestAirNewZealand.js');
var scrapeMovies = require('../airlines/airnewzealand/scrape-movies.js')
var noRepeatsAirNz = require('../airlines/airnewzealand/no-airNz-repeats.js')

test("Request Air NZ with different locations and dates", function(t) {
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
        // 27 requests to air nx website to retrieve data
        if(count === 27) {
          movies = noRepeatsAirNz(movies)          
          console.log(movies.length)
          t.equal(-1,movies.indexOf("We don't have any content matching your selection"), "No error messages in movie array")
          t.equal(-1, movies.indexOf(" "), "Movie array has no blanks" )
          t.ok(movies.length > 100, "atleast 100 movies in array")
        }
      })
    }
  });
  t.end()
})

