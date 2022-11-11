//controllers/supplies.js

const Project = require('../models/project')

function create(req, res) {
    Project.findById(req.params.id, function(err, project) {
      console.log(req.body)
      project.supplies.push(req.body)      
      project.save(function(err) {
        res.redirect(`/projects/${project._id}`)
      })
    })
  }

module.exports = {
    create
}