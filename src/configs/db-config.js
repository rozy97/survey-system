require("dotenv").config();

const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "",
  database: process.env.DATABASE || "survey_system"
});

db.connect(error => {
  if (error) console.error(error);
  console.log("database connected");
});

module.exports = db;
