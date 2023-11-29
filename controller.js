const queries = require('./queries');

module.exports = {
    getAllClients: async (req, res) => {
        let json = {error:'', result:[]};

        let clients = await queries.getAllClients();

        for(let i in clients){
            json.result.push({
                name: clients[i].name,
            });
        }
        res.json(json);
},

    addClient: async (req, res) => {
        let json = {error:'', result:{}};

        let name = req.body.client-name-input;
        let age = req.body.age-input;

        if (name && age){
            let adding = await queries.addClient(name, age);
            json.result = {
                name,
                age
            };
        } else {
            json.error = 'No fields detected.';
        }
        res.json(json);
    }
};