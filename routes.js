const app = require("express");
const router = app.Router();
const controller = require('./controller');

router.get('/', controller.index);
router.post('/addclient', controller.addClient);
router.get('/clients', controller.showClients);
router.get('/client/:id', controller.client);
router.get('/client/:id/edit', controller.editClient);
router.put('/client/:id/edit', controller.editClient);

module.exports = router;