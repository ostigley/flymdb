var selectDetailsForm
var dateSelect
var dateOptions
var movies
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

function getMovies () {
	var params = document.getElementById('airline').value
	$.ajax({
		url: "/movies",
		async: true,
		headers: {
			airline: params
		},
		success: function (data) {
			renderMovies(data)
		},
		type: 'GET'
	})
}



function renderMovies (result) {
	//this function will create and add elements to the DOM to display movies. 
	result.movies.map(function (movie) {
		var newMovie = generateMovie(movie)
		document.querySelector('.movies-container').appendChild(newMovie)
	})


};

function showHide (element){
	var plots = element.children;
	console.log("Tuesday")
    plots["1"].classList.toggle('hide');
};

var synopsis = document.querySelectorAll('.synopsis')
synopsis.onclick = showHide(this)



function sortMovies () {}


function generateMovie (movie) {
	var movieDiv = document.createElement('div')
	var posterDiv = document.createElement('div')
	var detailsDiv = document.createElement('div')
	var detailsList = document.createElement('ul')
	var titleLi = document.createElement('li')
	var ratingLi = document.createElement('li')
	var genreLi = document.createElement('li')
	var synopsisLi = document.createElement('li')
	var plotP = document.createElement('p')

	movieDiv.classList.add('movie')
	posterDiv.classList.add('poster')
	detailsDiv.classList.add('details')
	detailsList.classList.add('movieDetails')
	titleLi.classList.add('title')
	ratingLi.classList.add('rating')
	genreLi.classList.add('genre')
	synopsisLi.classList.add('synopsis')
	plotP.classList.add('plot', 'hide')

	posterDiv.innerHTML= `<img src="https://placekitten.com/g/300/450">`
	titleLi.innerHTML = `<a target="_blanck" href="http://www.imdb.com/title/${movie.imdbID}">${movie.Title}</a>`
	ratingLi.innerHTML = '<strong>IMDB Rating:</strong> ' + movie.imdbRating
	genreLi.innerHTML = '<strong>Genre: </strong>' + movie.Genre
	synopsisLi.innerHTML = '<strong>Synopsis: ...</srtong>'
	plotP.innerHTML = movie.Plot

	movieDiv.appendChild(posterDiv)
	movieDiv.appendChild(detailsDiv)
	detailsDiv.appendChild(detailsList)
	detailsList.appendChild(titleLi)
	detailsList.appendChild(ratingLi)
	detailsList.appendChild(genreLi)
	detailsList.appendChild(synopsisLi)
	synopsisLi.appendChild(plotP)

	return movieDiv

}

