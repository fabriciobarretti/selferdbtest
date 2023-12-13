const db = require("./db");

module.exports = {
    getAllClients: () => {
        return new Promise((accepted, rejected) => {
    
            db.query('SELECT * FROM clients2', (err, results)=>{
                if(err) { rejected(err); return; }
                accepted(results);
            });
        });
    },

    addClient: (name, age) => {
      return new Promise((accepted, rejected) => {
        
        db.query('INSERT INTO clients2 (name, age) VALUES (?, ?)',
        [name, age],
        (error, results) => {
          if(error){ rejected(error); return; }
          accepted(results);
        }
        );
      });
    },

    showClients: () => {
      return new Promise((accepted, rejected) => {
        
        db.query('SELECT * FROM clients2',
        (error, results) => {
          if (error) {rejected(error); return;}
          accepted(results);
        })
      })
    },

    client : (id) => {
      return new Promise((accepted, rejected) => {
        db.query('SELECT * FROM clients2 WHERE id = ?', [id], (error, results) => {
          if(error) { accepted(error); return; }
          if(results.length > 0){ // Verifies and get the first client with the given ID.
            // console.log(results[0]);
              accepted(results[0]);
          }else {
              accepted(false);
          }
        })
      })
    }
  };