
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('airnewzealand').del(),

    // Inserts seed entries
    knex('airnewzealand').insert({id: 1, movieId: 1}),
    knex('airnewzealand').insert({id: 2, movieId: 2})
  );
};
