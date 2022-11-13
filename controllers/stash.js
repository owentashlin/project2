const Stash = require('../models/stash')
const User = require('../models/user')

function show(req, res) {
    res.render('projects/stash')
}

async function update(req, res) {
    try{
        let stash = new Stash(req.body)
        let user = await User.findById(req.body.user)
        user.stash.push(stash)
        await user.save()
        await stash.save()
        res.redirect('/projects/stash')
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {
    show,
    update
}

