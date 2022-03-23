const express = require('express');
const app = express();
const PORT = 8080;

// Query parameter
// ------------------
app.get('/', (req, res)=>{
    // Normal way 
    /*
    const studentId = req.query.id;
    const studentName = req.query.name;
    */

    // using destructure

    /*const {name, id} = req.query;
    res.send(`<h1>Student name: ${name}, Student ID: ${id}</h1>`)
    */

})

// Route parameter
// ---------------
app.get('/userId/:101/userAge/:22', (req, res)=>{
    const id = req.params.userId;
    const age = req.params.userAge;
    res.send(`<h1>Student id: ${id}, Student age: ${age}</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`app is running at http://localhost:${PORT}`)
})