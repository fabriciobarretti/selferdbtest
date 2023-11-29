const app = require("express");
const router = app.Router();
const controller = require('./controller');

router.post('/addclient', controller.addClient);
// router.post('/createtable', controller.createTable);


module.exports = router;