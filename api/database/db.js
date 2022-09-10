const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel_reservation",
});
db.connect();

module.exports = db;
