require("dotenv").config();
module.exports = {
  development: {
    username: process.env.Dbusername,
    password: process.env.Password,
    database: process.env.Database,
    host: process.env.Host,
    dialect: process.env.Dialect,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
