const path = require('path')
const users = require('../models/users.model')

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'))
}


exports.saveUsers = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const newUser = {
        name,
        age
    }
    users.push(newUser)
    res.status(201).json(users)
}