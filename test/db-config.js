var knex = require('knex')

var config =  {
	directory: __dirname + '/migrations',
	tableName: 'knex_migrations'
}

module.exports = {
	config: config,
	knex: knex
}