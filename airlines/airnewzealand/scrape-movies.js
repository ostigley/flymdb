var cheerio = require('cheerio')

module.exports = function(webdata) {
  $ = cheerio.load(JSON.stringify(webdata));
var possibleMovies = $('p')
console.log("movies!", possibleMovies)





}
