// controllers/projects.js

const Project = require('../models/project')

function index(req, res) {
    res.redirect('../index')
}

function addProject(req, res) {
    res.render('projects/add')
}

function create(req, res) {
    let project = new Project(req.body)
    project.save(function(err){
        if (err) return console.log('error, cannot save new project')
        else res.redirect('projects/library')
    })
    console.log(req.body)
}

function findAll(req, res) {
    Project.find({}, function(err, projects) {
        if (err) console.log('error, cannot retrieve project information')
        console.log('findAll', projects)
        res.render('projects/library', { projects })
    })
}

function showDetail(req, res) {
    Project.findById(req.params.id, function(err, project) {
        if (err) console.log('error, cannot retrieve project information')
        res.render('projects/detail', { name: 'Project Name', project })
    })
  }

module.exports = {
    index,
    addProject,
    create,
    findAll,
    showDetail
}