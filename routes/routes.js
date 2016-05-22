var express = require('express')
var router = express.Router()
var movies = require('../db_lib/db-functions.js').airlineMovies

router.get('/', function (req, res) {
	res.render('index')
})


router.post('/', function (req, res) {
	movies(req.body.airline, function (error, response) {
		console.log(response)
		console.log(typeof response)
		res.render('my-movies', {movies: response})
	})	
})

router.get('/all', function (req, res) {

	res.render('movies')
})



module.exports = router