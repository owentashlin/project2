// routes/projects.js

var express = require("express");
var router = express.Router();

var passport = require("passport");

const projectsCtrl = require('../controllers/projects')

router.get('/index', projectsCtrl.index)
router.get('/projects/add', projectsCtrl.addProject)
router.get('/projects/library', projectsCtrl.findAll)
router.get('/projects/:id', projectsCtrl.showDetail)
router.get('/projects/:id/update', projectsCtrl.showUpdate)

router.post('/', projectsCtrl.create)
router.delete('/projects/:id', projectsCtrl.deleteProject)
router.put('/:id', projectsCtrl.update)

module.exports = router;