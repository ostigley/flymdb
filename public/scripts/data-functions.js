function showfunctionButtons () {
	var hideImages = document.createElement('button')
	hideImages.setAttribute("onclick", "togglePosters()")
	hideImages.setAttribute("type", "button")
	hideImages.setAttribute("id", "togglePosters")
	hideImages.innerHTML = "Show/hide Posters"
	

	var  selectGenre = document.createElement('select')
	selectGenre.setAttribute("class", "genreSelector")
	genres.map(function(genre) {
		var optionGenre = document.createElement('option')
		optionGenre.value = genre
		optionGenre.innerHTML = genre
		selectGenre.appendChild(optionGenre)
	})

	var buttons = [hideImages, selectGenre]
	buttons.map(function(button) {
		document.querySelector('.movies-container').appendChild(button)
	})

}

function getGenres (moviesArray) {
	var genres = []
	moviesArray.map(function(movie) {
		var Genres = movie.Genre.split(", ")
		Genres.map(function(item) {
			if (genres.indexOf(item) === -1) genres.push(item)
		})
	})
	return genres
}

function togglePosters () {
	var posters = document.querySelectorAll('.poster')
	
	for(i=0; i<posters.length; i++) {
		posters[i].classList.toggle('hide')
	}

}

function filterMoviesGenre (moviesArray, genre) {

}

// function sortMoviesRating (moviesArray)