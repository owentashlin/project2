const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stashSchema = new Schema({
    type: Boolean,
    description: String,
    amount: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
})

module.exports = mongoose.model('Stash', stashSchema)