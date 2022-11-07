var express = require("express");
var router = express.Router();
var passport = require("passport");

const projectsCtrl = require('../controllers/projects')

router.get('/index', projectsCtrl.index)
//router.get('/add', projectsCtrl.addProject)

module.exports = router;