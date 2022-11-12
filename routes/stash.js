let express = require('express');
let router = express.Router();

var passport = require("passport")
const isLoggedIn = require("../config/auth")

const stashCtrl = require("../controllers/stash")

router.get('/projects/stash', isLoggedIn, stashCtrl.show)

router.post('/projects/stash', isLoggedIn, stashCtrl.update)

module.exports = router