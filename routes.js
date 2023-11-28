const app = require("express");
const router = app.Router();
const controller = require('./controller');

router.get('/addclient', controller.addClient);

module.exports = router;