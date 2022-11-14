// controllers/projects.js
const Project = require('../models/project')
const User = require('../models/user')

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

async function create(req, res) {
    try{
        let project = new Project(req.body)
        let user = await User.findById(req.body.user)
        user.projects.push(project)
        await user.save()
        await project.save()
        res.redirect('projects/library')
    }
    catch(err){
        console.log(err)
    }
}

function findAll(req, res) {
    let projectQuery = req.query._id ? {_id: new RegExp(req.query._id, "i")} : {}
    Project.find(projectQuery, function(err, projects) {
        res.render('projects/library', {
            projects,
            user: req.user,
            _idSearch: req.query._id
        })
    })
}

function showDetail(req, res) {
    Project.findById(req.params.id, function(err, project) {
        if (err) console.log('error, cannot retrieve project information')
        res.render('projects/detail', { name: 'Project Name', project })
    })
}

async function deleteProject(req, res) {
    try {
    console.log(req.params)
    let project = await Project.findById(req.params.id).populate({
        path: "user"
    })
    let user = await User.findById(project.user._id)
    let deletedProject = user.projects.indexOf(project._id)
    user.projects.splice(deletedProject, 1)
    await Project.findByIdAndDelete(req.params.id)
    await user.save()
        res.redirect('/projects/library')
  }
  catch(err){
    console.log(err)
  }
}  

function update(req, res) {
    Project.updateOne({_id:req.params.id}, req.body, function(err, updated) {
        console.log('updated', updated)
        res.redirect('/projects/library')
    })
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