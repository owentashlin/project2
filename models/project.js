const mongoose = require('mongoose')

const Schema = mongoose.Schema

const supplySchema = new Schema({
    type: Boolean,
    description: String,
    own: Boolean,
    amount: String
    
})

const projectSchema = new Schema({
    name: String,
    type: String,
    sourceLink: String,
    status: String,
    supplies: [supplySchema]
}) 

function updateOne(id, project) {
    id = parseInt(id)
    const foundProject =  projects.find((project) => project.id === id)
    foundProject = project.project
}

module.exports = mongoose.model('Project', projectSchema)