// routes/projects.js

var express = require("express");
var router = express.Router();

var passport = require("passport");

const projectsCtrl = require('../controllers/projects')

router.get('/index', projectsCtrl.index)
router.get('/projects/add', projectsCtrl.addProject)
router.get('/projects/library', projectsCtrl.showLibrary)

router.post('/', projectsCtrl.create)
router.get('/:id', projectsCtrl.findAll)

module.exports = router;