// controllers/projects.js

const project = require('../models/project')
const Project = require('../models/project')

function index(req, res) {
    res.redirect('../index')
}

function addProject(req, res) {
    res.render('projects/add')
}

function showUpdate(req, res) {
    Project.findById(req.params.id, function(err, project) {
        if (err) console.log('error, cannot retrieve project information')
        res.render('projects/update', { name: 'Project Name', project })
    })
}

function create(req, res) {
    let project = new Project(req.body)
    project.save(function(err){
        if (err) return console.log('error, cannot save new project')
        else res.redirect('projects/library')
    })
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

function deleteProject(req, res) {
    Project.deleteOne(req.params.projectId, (err, project) => {
        if (err) return res.setatus(500).send
        else console.log(project)
        })
        res.redirect('/projects/library')
  }

function update(req, res) {
    Project.updateOne(req.params.id, req.body)
    console.log('updated', req.body)
    res.redirect('/projects/library')
}


module.exports = {
    index,
    addProject,
    create,
    findAll,
    showDetail,
    deleteProject,
    showUpdate,
    update
}