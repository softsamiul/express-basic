const express = require('express');
const app = express();
const PORT = 81;

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/circle.html')
})
app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    const result = Math.PI * radius * radius;

    res.send(`<h1> Area of circle is ${result} </h1>`)
})
app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/triangle.html')
})
app.post('/triangle', (req, res) => {
    const base = req.body.base;
    const height = req.body.height;

    const result = .5 * base * height;

    res.send(`<h1> Area of triangle is ${result} </h1>`)
})




app.listen(PORT, ()=> {
    console.log(`app is running at http://localhost:${PORT}`)
})