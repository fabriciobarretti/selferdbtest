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
    }
  };