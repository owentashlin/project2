// controllers/projects.js

const Project = require('../models/project')

function index(req, res) {
    res.redirect('../index')
}

// function addProject(req, res) {
//     res.send('add project')
// }

module.exports = {
    index,
    //addProject
}