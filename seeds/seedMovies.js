
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movies').del(),

    // Inserts seed entries
    knex('movies').insert({Title: 'Captain America: Civil War',Year: '2016',Rated: 'PG-13',Released: '06 May 2016',Runtime: '146 min',Genre: 'Action, Adventure, Sci-Fi',Director: 'Anthony Russo, Joe Russo',Writer: 'Christopher Markus (screenplay), Stephen McFeely (screenplay), Mark Millar (comic book), Joe Simon (characters), Jack Kirby (characters)',Actors: 'Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan',Plot: 'Political interference in the Avengers\' activities causes a rift between former allies Captain America and Iron Man.',Language: 'English',Country: 'USA',Awards: 'N/A',Poster: 'http://ia.media-imdb.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg',Metascore: '84',imdbRating: '8.2',imdbVotes: '6,493',imdbID: 'tt3498820',Type: 'movie',tomatoMeter: '94',tomatoImage: 'fresh',tomatoRating: '8.5',tomatoReviews: '18',tomatoFresh: '17',tomatoRotten: '1',tomatoConsensus: 'N/A',tomatoUserMeter: 'N/A',tomatoUserRating: 'N/A',tomatoUserReviews: '97211',tomatoURL: 'http://www.rottentomatoes.com/m/captain_america_civil_war/',DVD: 'N/A',BoxOffice: 'N/A',Production: 'Walt Disney Pictures',Website: 'http://marvel.com/captainamerica#/home',Response: 'True'}),
    knex('movies').insert({Title:'X-Men: The Last Stand',Year:'2006',Rated:'PG-13',Released:'26 May 2006',Runtime:'104 min',Genre:'Action, Adventure, Sci-Fi',Director:'Brett Ratner',Writer:'Simon Kinberg, Zak Penn',Actors:'Hugh Jackman, Halle Berry, Ian McKellen, Patrick Stewart',Plot:'When a cure is found to treat mutations, lines are drawn amongst the X-Men, led by Professor Charles Xavier, and the Brotherhood, a band of powerful mutants organized under Xavier\'s former ally, Magneto.',Language:'English',Country:'Canada, USA, UK',Awards:'7 wins & 37 nominations.',Poster:'http://ia.media-imdb.com/images/M/MV5BMjI1NTg2ODA2Nl5BMl5BanBnXkFtZTcwMDc2MjEzMw@@._V1_SX300.jpg',Metascore:'58',imdbRating:'6.8',imdbVotes:'370,325',imdbID:'tt0376994',Type:'movie',tomatoMeter:'58',tomatoImage:'rotten',tomatoRating:'5.9',tomatoReviews:'232',tomatoFresh:'134',tomatoRotten:'98',tomatoConsensus:'X-Men: The Last Stand provides plenty of mutant action for fans of the franchise, even if it does so at the expense of its predecessors\' deeper character moments.',tomatoUserMeter:'62',tomatoUserRating:'3.6',tomatoUserReviews:'1071622',tomatoURL:'http://www.rottentomatoes.com/m/x_men_3_the_last_stand/',DVD:'03 Oct 2006',BoxOffice:'$234.3M',Production:'20th Century Fox',Website:'http://www.x-menthelaststand.com/',Response:'True'}),
	knex('movies').insert({Title:'Youth',Year:'2015',Rated:'R',Released:'04 Dec 2015',Runtime:'124 min',Genre:'Comedy, Drama',Director:'Paolo Sorrentino',Writer:'Paolo Sorrentino',Actors:'The Retrosettes, Gabriella Belisario, Harvey Keitel, Alex Macqueen',Plot:'A retired orchestra conductor is on holiday with his daughter and his film director best friend in the Alps when he receives an invitation from Queen Elizabeth II to perform for Prince Philip\'s birthday.',Language:'English, Swiss German, Spanish',Country:'Italy, France, UK, Switzerland',Awards:'Nominated for 1 Oscar. Another 13 wins & 36 nominations.',Poster:'http://ia.media-imdb.com/images/M/MV5BMjI2OTk5MzYyMl5BMl5BanBnXkFtZTgwMzY1MjE3NjE@._V1_SX300.jpg',Metascore:'64',imdbRating:'7.4',imdbVotes:'36,265',imdbID:'tt3312830',Type:'movie',tomatoMeter:'73',tomatoImage:'certified',tomatoRating:'7.0',tomatoReviews:'180',tomatoFresh:'132',tomatoRotten:'48',tomatoConsensus:'Gorgeously filmed and beautifully acted, Youth offers an enticing -- albeit flawed -- opportunity to witness an impressive array of seasoned veterans combining their cinematic might.',tomatoUserMeter:'70',tomatoUserRating:'3.6',tomatoUserReviews:'9924',tomatoURL:'http://www.rottentomatoes.com/m/youth_2015/',DVD:'01 Mar 2016',BoxOffice:'N/A',Production:'Fox Searchlight',Website:'http://www.youththemovie.com',Response:'True'})
	);
};


