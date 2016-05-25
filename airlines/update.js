var updateAnz = require('./airnewzealand/update-anz-movie-db.js')
var updateSingapore = require('./singapore/update-singapore.js')

var knexConfig = require('../knexfile.js')[process.env.NODE_ENV] 
var knex = require('knex')(knexConfig) // sets up knex with environment config. 

var dbFunctions = require('../db_lib/db-functions.js')  // pulls in our db functions
var db = dbFunctions(knex)  // decalres our db functions with knex environment

knex.migrate.rollback()
	.then(function () {
		knex.migrate.latest()
			.then(updateAnz)
			.then(updateSingapore)
			.then(function () {
				console.log("*******\n\nFinished Updates \n\n*******\n\n")
				process.exit()
			})
	})

