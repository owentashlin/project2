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
    supplies: [supplySchema],
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
}) 


module.exports = mongoose.model('Project', projectSchema)