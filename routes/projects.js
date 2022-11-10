// routes/projects.js

var express = require("express")
var router = express.Router()

var passport = require("passport")
const isLoggedIn = require("../config/auth")
const projectsCtrl = require('../controllers/projects')

router.get('/index', isLoggedIn, projectsCtrl.index)
router.get('/projects/add', isLoggedIn, projectsCtrl.addProject)
router.get('/projects/library', isLoggedIn, projectsCtrl.findAll)
router.get('/projects/:id', isLoggedIn, projectsCtrl.showDetail)
router.get('/projects/:id/update', isLoggedIn, projectsCtrl.showUpdate)

router.post('/', projectsCtrl.create)
router.delete('/projects/:id', projectsCtrl.deleteProject)
router.put('/:id', projectsCtrl.update)

module.exports = router;