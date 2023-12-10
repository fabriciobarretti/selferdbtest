const queries = require('./queries');

module.exports = {
    index: async (req, res) => {
        res.render('index');
    },

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
        let clientlist = await queries.showClients();
        let dataKeys = Object.keys(clientlist[0]); // Gets only the keys from the object.

        console.log(clientlist);
        console.log(dataKeys);

        // Making "id" uppercase
        for (i=0;i<dataKeys.length;i++){
                if (dataKeys[i] == 'id'){
                    dataKeys[i] = dataKeys[i].toUpperCase();
                } else {
                    dataKeys[i] = dataKeys[i].charAt(0).toUpperCase() + dataKeys[i].slice(1);
                }
        }

        res.render('clients', {clientlist: clientlist, dataKeys: dataKeys});
    },

    // Calling the query with just one client's info.
    client: async (req, res) => {
        let id = req.params.id;
        console.log(id);
        let client = await queries.client(id);
        console.log(client);
        res.render('client', {client: client});
        
    },

    editClient: async (req, res) => {
        let id = req.params.id;
        let client = await queries.client(id);
        res.render(`edit-client`, {client: client });
    }   
};