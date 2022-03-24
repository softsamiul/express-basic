const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const appRouter = require('./app')

app.use(appRouter)
app.listen(PORT, ()=>{
    console.log(`app is running at http://localhost:${PORT}`)
})