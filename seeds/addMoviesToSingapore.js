
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('singapore').del(),

    // Inserts seed entries
    knex('singapore').insert({movieId: 2}),
    knex('singapore').insert({movieId: 3})
  );
};
