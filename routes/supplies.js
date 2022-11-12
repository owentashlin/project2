let express = require('express');
let router = express.Router();

var passport = require("passport")
const isLoggedIn = require("../config/auth")

const suppliesCtrl = require('../controllers/supplies')

router.post('/projects/:id/supplies', isLoggedIn, suppliesCtrl.create)

module.exports = router