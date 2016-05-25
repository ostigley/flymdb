var express = require('express')
var app = express()
var jade = require('jade')
var bodyParser = require('body-parser')
var routes = require('./routes/routes.js')
var logger = require('morgan')
var path = require('path')

//Middle-ware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes)
//Viewing /partials / layout directory
// app.set('views', './views')
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname+'/public'));

app.listen(process.env.PORT || 3000)


