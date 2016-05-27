function showfunctionButtons () {
	var buttons = [makePosterButton(), GenreSelector()]
	buttons.map(function(button) {
		document.querySelector('.buttons').innerHTML = ""
		document.querySelector('.buttons').appendChild(button)
	})
}

function filterGenre () {
	var movies = document.querySelectorAll("div.movie")
	var genre = document.querySelector('.genreSelector').value
	console.log(genre)
	if (genre === "") {
		return 
	} else if (genre ==="All Genres") {
		for (i=0; i<movies.length; i++) {
			movies[i].classList.remove('hide')
		}
	} else {
		for (i=0; i<movies.length; i++) {
			if (!movies[i].classList.contains(genre)) {
				movies[i].classList.add('hide')
			}
		}
	}
	

}
 
function makePosterButton () {
	var hideImages = document.createElement('button')
	hideImages.setAttribute("onclick", "togglePosters()")
	hideImages.setAttribute("type", "button")
	hideImages.setAttribute("id", "togglePosters")
	hideImages.innerHTML = "Show/hide Posters"
	return hideImages
}

function GenreSelector () {
	var  selectGenre = document.createElement('select')
	selectGenre.setAttribute("class", "genreSelector")
	selectGenre.setAttribute("onchange", "filterGenre()")
	genres.unshift('All Genres')
	genres.map(function(genre) {
		var optionGenre = document.createElement('option')
		optionGenre.value = genre
		optionGenre.innerHTML = genre
		selectGenre.appendChild(optionGenre)
	})
	return selectGenre
}

function getGenres (moviesArray) {
	var genres = []
	moviesArray.map(function(movie) {
		var Genres = movie.Genre.split(", ")
		Genres.map(function(item) {
			if (genres.indexOf(item) === -1) genres.push(item)
		})
	})
	return genres.sort()
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