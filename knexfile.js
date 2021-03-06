require('dotenv').config();
module.exports = {

  test: {
    client: 'pg',
    connection: {
      user: process.env.PGSQL_USERNAME,
      password: process.env.PGSQL_PASSWORD,
      host: 'localhost',
      port: 5432
    },
    directory: './migrations/',
    seeds: {
      directory: './seeds/'
    },
    tableName: 'knex_migrations',
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

   development: {
    client: 'pg',
    connection: {
      user: process.env.PGSQL_USERNAME,
      password: process.env.PGSQL_PASSWORD,
      host: 'localhost',
      port: 5432
    },
    directory: './migrations/',
    seeds: {
      directory: './seeds/'
    },
    tableName: 'knex_migrations',
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
      user:     process.env.PGSQL_USERNAME,
      password: process.env.PGSQL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: process.env.DATABASE_URL || {
    client: 'postgresql',
    connection: {
      database: 'flymdbDB',
      user:     process.env.PGSQL_USERNAME,
      password: process.env.PGSQL_PASSWORD
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
