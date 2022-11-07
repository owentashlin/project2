const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: String,
    description: String,
    sourceLink: String,
    supplies: []
}) 

const librarySchema = new Schema({
    name: String,
    type: String,
    blurb: String,
    projects: [projectSchema]
})

module.exports = mongoose.model('Libray', librarySchema)