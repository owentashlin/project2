let express = require('express');
let router = express.Router();

const suppliesCtrl = require('../controllers/supplies')

router.post('/projects/:id/supplies', suppliesCtrl.create)

module.exports = router