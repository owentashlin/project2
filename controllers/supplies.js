//controllers/supplies.js

const Project = require('../models/project')

function create(req, res) {
   //res.send('project updated')
    Project.findById(req.params.id, function(err, project) {
      console.log(req.body)
      project.supplies.push(req.body)      
      project.save(function(err) {
        res.redirect(`/projects/${project._id}`)
        //res.send('project updated')
      })
    })
  }

module.exports = {
    create
}