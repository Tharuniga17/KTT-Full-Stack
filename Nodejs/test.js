const pool = require("./node");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Connection error", err);
  } else {
    console.log("Connected successfully:", res.rows);
  }
  pool.end();
});