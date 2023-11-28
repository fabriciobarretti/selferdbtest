const db = require("./db");

module.exports = {
    getAllClients: () => {
        return new Promise((accepted, rejected) => {
    
            db.query('SELECT * FROM selferdbtest', (error, results)=>{
                if(error) { rejected(error); return; }
                accepted(results);
            });
        });
    },

    addClient: () => {
      
    }

};

  // Adding Client ^ Move up!!
  app.get("/addclient", (req, res) => {
    let post = client; // Change this. It won't work.
    let sql = "INSERT INTO employee SET ?";

    let query = db.query(sql, post, (err) => {
        if (err) {
          throw err;
        }
        // res.send("Employee 1 added");
        console.log(`Client added`);
    });
  });


// Old code used for creating the database and table.

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