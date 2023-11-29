const mysql = require ("mysql2");

// Connecting to the database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CRUD2023",
    database: "selferdbtest",
  });

db.connect((err) => {
  if (err){
      throw err;  
    } 

    console.log(`MySql Connected to the database.`);
  });

  module.exports = db;