const express = require('express')
const app = express()

const usersRoute = require('./routes/users.route')

app.use('/api/users/', usersRoute)

app.get('/',(req, res) => {
    res.send("Hi")
})


module.exports = app;