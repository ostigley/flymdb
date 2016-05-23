var selectDetailsForm
var dateSelect
var dateOptions
window.onload = function () {
	selectDetailsForm = document.getElementById('selectDetails')
	dateSelect = document.querySelector('.dateSelect')
	dateOptions = document.querySelector('#date-options')
}


var airnewzealandDateOptions = []


function selectDateChangeHandler (airlineSelection) {
	switch(airlineSelection.value) {
		case 'airnewzealand':
			airnewzealandDates()
			break;
		case 'singapore':
			singaporeDates()
			break;
		case 'Please Select':
			break;
	}

}

function singaporeDates() {
	dateSelect.classList.toggle('show-hide')
	var singaporeDateOptions = ["This month", "Next month"]
	singaporeDateOptions.map(function (date){
		var option = document.createElement("option")
		option.value = date.replace(" ","").toLowerCase()
		option.text = date
		dateOptions.appendChild(option)		
	})
}

function airnewzealandDates() {
	dateSelect.classList.remove('show-hide')
}

var movies = {}
function getMovies (params) {
	$.ajax({
		url: "/movies",
		success: renderMovies(result),
		type: 'GET'
	})
}



function renderMovies (result) {
	//this function will create and add elements to the DOM to display movies. 
	console.log(result)	
	result.movies.map(function (movie) {
		var newEntry = generateMovie(movie)


		

	})

}

function sortMovies () {}


function generateMovie (movie) {
	var movieDiv = document.createElement('div')
	movieDiv.classList.add('movie')
	var posterDiv = document.createElement('div')
	posterDiv.classList.add('poster')
	posterDiv.innerHTML= '<img src="https://placekitten.com/g/300/450">' //or movie.Poster
	var detailsDiv = document.createElement('div')
	detailsDiv.classList.add('details')
	var detailsList = document.createElement('ul')
	detailsList.classList.add('movieDetails')
	var titleLi = document.createElement('li')
	titleLi.classList.add('title')
	titleLi.innerHTML = `<a target="_blanck" href="http://www.imdb.com/${movie.imdbID}">${movie.Title}</a>`
	var ratingLi = document.createElement('li')
	ratingLi.classList.add('rating')
	ratingLi.innerHTML = '<strong> IMDB Rating:</strong> ' + movie.imdbRating
	var genreLi = document.createElement('li')
	genreLi.classList.add('genre')
	var synopsisLi = document.createElement('li')
	//add genre content
	synopsisLi.classList.add('synopsis')
	var plotP = document.createElement('p')
	plotP.classList.add('plot', 'hide')
	//add p content

	movieDiv.appendChild(posterDiv)
	movieDiv.appendChild(detailsDiv)
	detailsDiv.appendChild(detailsList)
	detailsList.appendChild(titleLi)
	detailsList.appendChild(ratingLi)
	detailsList.appendChild(synopsisLi)
	synopsisLi.appendChild(plotP)

	return movieDiv

}

