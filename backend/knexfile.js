const development = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/db.sqlite3",
  },
  migrations: {
    directory: "./src/database/migrations",
  },
  useNullAsDefault: true,
};
const staging = {
  client: "postgresql",
  connection: {
    database: "my_db",
    user: "username",
    password: "password",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

const production ={
  client: "postgresql",
  connection: {
    database: "my_db",
    user: "username",
    password: "password",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

module.exports = {development, staging, production}