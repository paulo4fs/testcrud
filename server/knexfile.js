module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/database.sqlite',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  useNullAsDefault: true,
};
