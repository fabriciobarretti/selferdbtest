const app = require("express");
const router = app.Router();
const controller = require('./controller');

router.post('/addclient', controller.addClient);

module.exports = router;