var movies
var genres
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
var synopsis


function renderMovies (result) {
	movies = result.movies
	genres = getGenres(movies)
	sortMoviesRating(movies)
	//this function will create and add elements to the DOM to display movies. 
	showfunctionButtons()

	movies.map(function (movie) {
		var newMovie = generateMovie(movie)
		getGenres([movie]).map(function(genre) {
			if (genre !== "" & genre !== "N/A") newMovie.classList.add(genre)
		})
		document.querySelector('.movies-container').appendChild(newMovie)
	})

};

// var synopsis = document.getElementsByClassName('synopsis')
// synopsis.onclick = showHide(this)
// function showHide (element){
// 	console.log(element)
// 	element.children.classList.toggle('hide')
// };

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
	plotP.classList.add('plot')

	posterDiv.innerHTML= `<img src="${movie.Poster}">`
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
function sortMoviesRating (moviesArray) {
	moviesArray.sort(function (a, b) {
		if (a.imdbRating < b.imdbRating ) {
		    return 1;
		} else if (a.imdbRating > b.imdbRating ) {
		  return -1;
		} else {
			return 0;
		}
	})

}

