// Update with your config settings.
require('dotenv').config();
var knex = require('knex')

module.exports = {

  test: {
    client: 'sqlite3',
    connection: {
      filename: "./testflymydb.sqlite"
    },
    directory: './migrations/',
    seeds: {
      directory: './seeds/'
    },
    tableName: 'knex_migrations',
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'sqlite3',
    connection: {
    filename: "./flymydb.sqlite"
  },
  seeds: {
    directory: './seeds/'
  },
  useNullAsDefault: true,
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'flymdbDB',
      user:     'process.env.PGSQL_USERNAME',
      password: 'process.env.PGSQL_PASSWORD'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'flymdbDB',
      user:     'process.env.PGSQL_USERNAME',
      password: 'process.env.PGSQL_PASSWORD'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
