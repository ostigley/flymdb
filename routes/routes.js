var express = require('express')
var router = express.Router()
var movies = require('../db_lib/db-functions.js').airlineMovies

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