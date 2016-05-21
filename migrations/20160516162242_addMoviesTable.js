
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('movies', function (table) {
	 	table.increments();
	 	table.string('Title');
	 	table.string('Year');
	 	table.string('Rated');
	 	table.string('Released');
	 	table.string('Runtime');
	 	table.string('Genre');
	 	table.string('Director');
	 	table.string('Writer');
	 	table.string('Actors');
	 	table.string('Plot');
	 	table.string('Language');
	 	table.string('Country');
	 	table.string('Awards');
	 	table.string('Poster');
	 	table.string('Metascore');
	 	table.string('imdbRating');
	 	table.string('imdbVotes');
	 	table.string('imdbID');
	 	table.string('Type');
	 	table.string('tomatoMeter');
	 	table.string('tomatoImage');
	 	table.string('tomatoRating');
	 	table.string('tomatoReviews');
	 	table.string('tomatoFresh');
	 	table.string('tomatoRotten');
	 	table.string('tomatoConsensus');
	 	table.string('tomatoUserMeter');
	 	table.string('tomatoUserRating');
	 	table.string('tomatoUserReviews');
	 	table.string('tomatoURL');
	 	table.string('DVD');
	 	table.string('BoxOffice');
	 	table.string('Production');
	 	table.string('Website');
	 	table.string('Response');
	 	table.timestamps();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('movies')
};


