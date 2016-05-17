var redtape = require('redtape')
var dbConfig = require('./db-config')
var knex = dbConfig.knex
var config = dbConfig.config
var dbFunctions = require('db-functions.js')


//Prepare database for testing: 

var test = redtape({
	beforeEach: function(callback) {
		return knex.migrate.latest(config)
	}
	.then(function (response) {
		seeds required for show movies for airline function

		callback?
	}), 

	afterEach: function (callback) {
		return anything need to be done here?
	}
})


// test show movies for airlinen function
test ('Should return a list of movies one airline is showing', function (t) {
	dbFunctions.airlineMovies('airnewzealand', function (error, resp) {
		if (error) {
			console.log(error)
		} else {
			t.equal(resp.length, 1, "one movie in air new zealand")
			t.equal(resp[0].Title,'Captain America: Civil War', "movie in air new zealand is correct" )
		}
		t.end()
	})
})



test addmovie to db if not already exist: 
	-add new movie
	-add existing movie to airline
	-add existing movie to airline that already has it. 

