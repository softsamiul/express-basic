const { application } = require('express');
const express = require('express');
const app = express();
const router = express.Router();



// Query parameter
// ------------------
router.get('/', (req, res)=>{
    // Normal way 
    /*
    const studentId = req.query.id;
    const studentName = req.query.name;
    */

    res.send("Hello")

    // using destructure
    /*
    const {name, id} = req.query;
    res.send(`<h1>Student name: ${name}, Student ID: ${id}</h1>`)
    */

})

// Route parameter
// ---------------
router.get('/userid/:id/userage/:age', (req, res)=>{
    const id = req.params.id;
    const age = req.params.age;
    console.log(id, age)
    res.send(`<h1>Student id: ${id}, Student age: ${age}</h1>`)
})

// Request with headers
router.get('/', (req, res) => {
    const id = req.header('id'); // inside header there will be key name
    const age = req.header('age')
    res.send(`<h1>Student id: ${id}, Student age: ${age}</h1>`)
})

router.post('/user', (req, res) => {
    const name = req.body.name;
    res.send(`Welcome ${name}`)

})

// Request with JSON data/fprm data inside body -> req.body.parameterName









module.exports = router;