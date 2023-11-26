const express = require ("express");
const mysql = require ("mysql2");
const client = require("./index");

const app = express();

// Connecting to the database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CRUD2023",
    database: "selferdbtest",
  });

db.connect((err) => {
    if (err) throw err; 
      
    console.log("MySql Connected.");  
  });


// Creating DB
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE selferdbtest";
  
    db.query(sql, (err) => {
      if (err) throw err;
    
    // res.send("Database created");
    console.log("Database created.");
    });
  });

// Creating table
app.get("/createtable", (req, res) => {
    let sql = "CREATE TABLE client(id int AUTO_INCREMENT, name VARCHAR(255), age VARCHAR(255), phone VARCHAR(255), city VARCHAR(255), country VARCHAR(255), status BINARY PRIMARY KEY(id))";
  
    db.query(sql, (err) => {
      if (err) throw err;
  
      // res.send("Employee table created");
      console.log("Employee table created");
    });
  });

  // Adding Client
  app.get("/addclient", (req, res) => {
    let post = client;
    let sql = "INSERT INTO employee SET ?";

    let query = db.query(sql, post, (err) => {
        if (err) throw err;
        // res.send("Employee 1 added");
        console.log(`Client added`);
    });
  });
  
  