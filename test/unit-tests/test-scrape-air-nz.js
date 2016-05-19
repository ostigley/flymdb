var test = require('tape');
var requestAirNewZealand = require('../../airlines/airnewzealand/requestAirNewZealand.js');
var scrapeMovies = require('../../airlines/airnewzealand/scrape-movies.js')
var noRepeatsAirNz = require('../../airlines/airnewzealand/no-airNz-repeats.js')

test("Request Air NZ and retrieve movies", function(t) {
  var movies = []
  var count = 0
    return requestAirNewZealand()
      .then(scrapeMovies)
      .then(noRepeatsAirNz)
      .then(function (movies) {
        t.equal(-1,movies.indexOf("We don't have any content matching your selection"), "No error messages in movie array")
        t.equal(-1, movies.indexOf(" "), "Movie array has no blanks" )
        t.ok(movies.length > 100, "At least 100 movies in array")
        t.end()
      })
  });

