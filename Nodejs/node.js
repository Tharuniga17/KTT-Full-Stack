const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "Tharuni@09",
  port: 5432,
});

module.exports = pool;