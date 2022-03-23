const express = require('express')
const app = express()

const usersRoute = require('./routes/users.route')

app.use('/api/users/', usersRoute)

app.get('/',(req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/register',(req, res) => {

    // res.json used to send json file
    // res.status(200).json({
    //     message: "This is demo message",
    //     statusCode: 200
    // })
    res.statusCode = 200;

    // res.sendFile(directory) used to send a html file as response
    res.sendFile(__dirname+'/views/register.html')

    // Used to redirect
    // res.redirect('/')
})
app.get('/login',(req, res) => {
    
    res.cookie('name','Samiul Islam')
    res.cookie('age','25')
    res.clearCookie('age')
    res.send("Hi I'm Login page")
})


module.exports = app;