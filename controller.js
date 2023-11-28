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
        
    }
};