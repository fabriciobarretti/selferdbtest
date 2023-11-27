const app = require("express");
const router = express.Router();

router.get('/addclient', controller.addClient);

module.exports = router;