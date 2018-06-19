// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "notes"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    }

  },

};
