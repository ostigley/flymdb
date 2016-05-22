var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
	res.render('index')
})

router.get('/mymovies', function (req, res) {
	res.redirect('/')
})

router.post('/', function (req, res) {
	console.log(req.body)
	res.render('my-movies', {title: "Movies"})
})

router.get('/all', function (req, res) {

	res.render('movies')
})



module.exports = router