const app = require("express");
const router = app.Router();
const controller = require('./controller');

router.get('/', controller.index);
router.post('/addclient', controller.addClient);
router.get('/clients', controller.showClients);
router.get('/client/:id', controller.client);
router.get('/client/:id/editing', controller.editingClient);
router.post('/client/:id/editing', controller.editingClient);

module.exports = router;