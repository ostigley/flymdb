var test = require('tape');
var requestSingapore = require('../../airlines/singapore/request-singapore.js');
var scrapeSingapore = require('../../airlines/singapore/scrape-singapore.js')

test("Request Singapore and retrieve movies", function(t) {
  var movies = []
  var count = 0
    return requestSingapore()
      .then(scrapeSingapore)
      .then(function (movies) {
        t.equal(-1,movies.indexOf("We don't have any content matching your selection"), "No error messages in movie array")
        t.equal(-1, movies.indexOf(" "), "Movie array has no blanks" )
        t.ok(movies.length > 90, "At least 100 movies in array")
        t.end()
      })
  });


