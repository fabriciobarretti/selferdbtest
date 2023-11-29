const db = require("./db");

module.exports = {
    getAllClients: () => {
        return new Promise((accepted, rejected) => {
    
            db.query('SELECT * FROM selferdbtest', (err, results)=>{
                if(err) { rejected(err); return; }
                accepted(results);
            });
        });
    },

    addClient: (name, age) => {
      return new Promise((accepted, rejected) => {
        db.query('INSERT INTO selferdbtest (name, age) VALUES (?, ?)',
        [name, age],
        (error, results) => {
          if(error){ rejected(error); return; }
          accepted(results);
        }
        );
      });
    }
  };

// Old code used for creating the database and table.
// The code used here came from: https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mysql

//   // Creating DB
// app.get("/createdb", (req, res) => {
//     let sql = "CREATE DATABASE selferdbtest";
  
//     db.query(sql, (err) => {
//       if (err) {
//         throw err;
//       }
    
//     // res.send("Database created");
//     console.log("Database created.");
//     });
//   });

// // Creating table
// app.get("/createtable", (req, res) => {
//     let sql = "CREATE TABLE clients(id int AUTO_INCREMENT, name VARCHAR(255), age VARCHAR(255), phone VARCHAR(255), city VARCHAR(255), country VARCHAR(255), status BINARY PRIMARY KEY(id))";
  
//     db.query(sql, (err) => {
//       if (err) {
//         throw err;
//       }
  
//       // res.send("Employee table created");
//       console.log("Clients table created");
//     });
//   });