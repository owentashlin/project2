const mongoose = require('mongoose')

const Schema = mongoose.Schema

const librarySchema = new Schema({
    name: String,
    type: String,
    projects: [
        {type: Schema.Types.ObjectId, ref: 'Project'
    }]
})

module.exports = mongoose.model('Libray', librarySchema)