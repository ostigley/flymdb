
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('singapore', function(table) {
  	table.increments();
  	table.integer('movieId');
  	table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('singapore')
};
