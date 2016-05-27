var request = require ('request')
var qs = require('query-string')
var badResponse = {"Response":"False","Error":"Movie not found!"}
const emptyEntry = {Title:"",Year:"",Rated:"",Released:"",Runtime:"",Genre:"",Director:"",Writer:"",Actors:"",Plot:"",Language:"",Country:"",Awards:"",Poster:"",Metascore:"",imdbRating:"",imdbVotes:"",imdbID:"",Type:"",tomatoMeter:"",tomatoImage:"",tomatoRating:"",tomatoReviews:"",tomatoFresh:"",tomatoRotten:"",tomatoConsensus:"",tomatoUserMeter:"",tomatoUserRating:"",tomatoUserReviews:"",tomatoURL:"",DVD:"",BoxOffice:"",Production:"",Website:"",Response:""};

module.exports = function (titlesArray) {
	var hostname = "http://www.omdbapi.com/?"

	titlesArray.map(function(title, index) {
		var moviePath = {
			t: title,
			type: "movie",
			tomatoes: true
		}
		titlesArray[index] = hostname+qs.stringify(moviePath)
	})
	return Promise.all((titlesArray.map(omDB)))
}

function omDB(uri) {
  return new Promise(function (resolve, reject) {
    request(uri, function (error, response, body) {
      if (error) {
        reject(error)
      } else {
        if (JSON.parse(body).Response === "False") {

          var title =  qs.parse(uri)['http://www.omdbapi.com/?t']
          body = {Title:"",Year:"",Rated:"",Released:"",Runtime:"",Genre:"",Director:"",Writer:"",Actors:"",Plot:"",Language:"",Country:"",Awards:"",Poster:"",Metascore:"",imdbRating:"",imdbVotes:"",imdbID:"",Type:"",tomatoMeter:"",tomatoImage:"",tomatoRating:"",tomatoReviews:"",tomatoFresh:"",tomatoRotten:"",tomatoConsensus:"",tomatoUserMeter:"",tomatoUserRating:"",tomatoUserReviews:"",tomatoURL:"",DVD:"",BoxOffice:"",Production:"",Website:"",Response:""};
          body.Title = title
          body.Poster = "../stylesheets/Flying_Film_Reel.jpg"
          resolve(body)
        } else {
          resolve(JSON.parse(body))
        }
      }
    })
  })
}


