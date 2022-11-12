const Stash = require('../models/stash')

function show(req, res) {
    res.render('projects/stash')
}

function update(req, res) {
    //res.send('stash updated')
    let stash = new Stash(req.body)
    stash.save(function(err){
        if (err) return console.log('error, cannot save stash item')
        else res.redirect('/projects/stash')
    })
}


module.exports = {
    show,
    update
}

