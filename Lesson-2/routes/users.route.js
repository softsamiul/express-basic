const express = require('express')
const route = express.Router()

route.get('/login', (req, res) => {
    res.send("<h1>This is login page </h1>")
})
route.get('/register', (req, res) => {
    res.send("<h1>This is register page </h1>")
})


module.exports = route;