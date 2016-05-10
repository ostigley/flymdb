var monthList = require('../../../data/month-strings.js')

 module.exports = function () {
	var urlsArray = [
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/201",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/202",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/204",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/247",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/210",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/203",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/205",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/215",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/216",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/206",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/207",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/212",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/248",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/208",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/211",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/219",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/213",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/209",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/220",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/244",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/235",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/251",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/236",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/237",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/238",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/240",
		"http://www.airnewzealand.co.nz/entertainment/%month%-%year%/all/movies/239"
	]

	
	var d = new Date()
	var changes = {
		"%month%": monthList[d.getMonth()],
		"%year%": d.getFullYear()
	}
	for (i=0 ; i < urlsArray.length ; i++ ) {
		for ( var change in changes) {
			urlsArray[i] =  urlsArray[i].replace(change, changes[change])
		}
	}
	return urlsArray
}

	

