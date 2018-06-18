// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "express_demo"
    },
    migrations: {
      tabeName: "Knex_migrations",
      directory: "./db/migrations"
    }
  },
};
