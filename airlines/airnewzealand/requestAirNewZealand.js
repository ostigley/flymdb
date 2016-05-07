 var http = require ("http");
 var fs = require('fs');
 var request = require('request')
 var monthList = require('../../data/month-strings.js')

module.exports= function(doThisAfterRequest) {
	//  various links that need to be visited at air nz: 
	var suffix = ["201","202","204","247","210","203","205","215","216","206","207","212","248","208","211","219","213","209","220","244","235","251","236","237","238","240","239"]
	var d = new Date();
	var hostname= "http://www.airnewzealand.co.nz/entertainment";
	var changes = {
		"%month%": monthList[d.getMonth()],
		"%year%": d.getFullYear()
	}
	
	suffix.forEach(function(suf) {
		var path = "/%month%-%year%/all/movies/%suffix%";
		changes["%suffix%"] = suf


		//edit URL
		for (var key in changes) {
			path = path.replace(key, changes[key])
		}
		console.log("Requesting URL: ", hostname + path)

		request(hostname + path, function(err, response, body) {
			if(err) {
				doThisAfterRequest(err)
			} else {
				doThisAfterRequest(err, response.statusCode, body)
			}
		})
		
	})
}

















