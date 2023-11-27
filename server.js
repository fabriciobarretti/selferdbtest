const express = require ("express");
const mysql = require ("mysql2");
const PORT = 3302;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
})

// Creating DB
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE selferdbtest";
  
    db.query(sql, (err) => {
      if (err) {
        throw err;
      }
    
    // res.send("Database created");
    console.log("Database created.");
    });
  });

// Creating table
app.get("/createtable", (req, res) => {
    let sql = "CREATE TABLE client(id int AUTO_INCREMENT, name VARCHAR(255), age VARCHAR(255), phone VARCHAR(255), city VARCHAR(255), country VARCHAR(255), status BINARY PRIMARY KEY(id))";
  
    db.query(sql, (err) => {
      if (err) {
        throw err;
      }
  
      // res.send("Employee table created");
      console.log("Employee table created");
    });
  });

  // Adding Client
  app.get("/addclient", (req, res) => {
    let post = client;
    let sql = "INSERT INTO employee SET ?";

    let query = db.query(sql, post, (err) => {
        if (err) {
          throw err;
        }
        // res.send("Employee 1 added");
        console.log(`Client added`);
    });
  });
  