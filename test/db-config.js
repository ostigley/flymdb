var knex = require('knex')

var config =  {
	client: 'sqlite3',
    connection: {
	    filename: "./flymydb.sqlite"
	 },
	useNullAsDefault: true,
	directory: __dirname + '../migrations/',
	tableName: 'knex_migrations'
}

module.exports = knex(config)