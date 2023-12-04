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

    showClients: async (req, res) => {
        let clientlist = {error: '', result:{}};
        let showing = await queries.showClients();
        clientlist.result = showing;
        // res.json(clientlist.result);
        
        // Pegar o nome de cada key e jogar numa array
        // let dataLength = Object.keys(showing);
        let dataKeys = Object.keys(showing[0]);

        console.log(showing);
        console.log(dataKeys);
        res.render('clients', { data: clientlist.result, dataKeys: dataKeys});
    }

    // createTable: async (req,res) => {
    //     let json = {error:'', result: {}};

    // }
};