var express = require('express')
var router = express.Router()

var knexConfig = require('../knexfile.js')[process.env.NODE_ENV] 
var knex = require('knex')(knexConfig)
var dbFunctions = require('../db_lib/db-functions.js')  // pulls in our db functions
var movies = dbFunctions(knex).airlineMovies


router.get('/', function (req, res) {
	res.render('index')
})


router.get('/movies', function (req, res) {
	movies(req.headers.airline, function (error, response) {
		res.json({movies: response})
	})	
})

router.get('/all', function (req, res) {

	res.render('movies')
})



module.exports = router