const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stashSchema = new Schema({
    type: Boolean,
    description: String,
    amount: String
})

module.exports = mongoose.model('Stash', stashSchema)