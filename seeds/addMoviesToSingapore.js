
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('singapore').del(),

    // Inserts seed entries
    knex('singapore').insert({id: 1, movieId: 2}),
    knex('singapore').insert({id: 2, movieId: 3})
  );
};
