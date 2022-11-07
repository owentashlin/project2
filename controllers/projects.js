// controllers/projects.js

const Project = require('../models/project')

function index(req, res) {
    res.redirect('../index')
}

function addProject(req, res) {
    res.render('projects/add')
}

module.exports = {
    index,
    addProject
}