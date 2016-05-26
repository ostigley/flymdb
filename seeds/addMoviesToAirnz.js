
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('airnewzealand').del(),

    // Inserts seed entries
    knex('airnewzealand').insert({movieId: 1}),
    knex('airnewzealand').insert({movieId: 2})
  );
};
