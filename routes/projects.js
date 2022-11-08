// routes/projects.js

var express = require("express");
var router = express.Router();

var passport = require("passport");

const projectsCtrl = require('../controllers/projects')

router.get('/index', projectsCtrl.index)
router.get('/projects/add', projectsCtrl.addProject)
router.post('/', projectsCtrl.create)

module.exports = router;