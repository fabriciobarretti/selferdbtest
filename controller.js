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

        let client = req.body;

        if (client){
            let adding = await queries.addClient(client.clientName, client.clientAge);
            json.result = client;

            console.log(`Client ${client.clientName} was added succesfully.`);
            
        } else {
            json.error = 'No fields detected.';
        }
        res.json(json);
    },

    // createTable: async (req,res) => {
    //     let json = {error:'', result: {}};

    // }
};