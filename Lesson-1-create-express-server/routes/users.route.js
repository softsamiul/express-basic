const express = require('express')
const router = express.Router()


router.get('/register',(req, res)=>{
    res.send("<h1>Hello Register </h1>")
})
router.get('/login',(req, res)=>{
    res.send("<h1>Hello Login</h1>")
})


module.exports = router;