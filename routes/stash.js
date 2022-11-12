let express = require('express');
let router = express.Router();

var passport = require("passport")
const isLoggedIn = require("../config/auth")

const stashCtrl = require("../controllers/stash")

router.get('/projects/stash', isLoggedIn, stashCtrl.show)

module.exports = router