const Stash = require('../models/stash')

function show(req, res) {
    res.render('projects/stash')
}

module.exports = {
    show
}

