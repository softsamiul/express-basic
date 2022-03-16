const express = require('express')
const userRouter = require('./routes/users.route')
const app = express()

app.get('/',(req, res)=>{
    res.send("Hello Express")
})
app.use('/api/user/',userRouter)

// app.get('/about',(req, res)=>{
//     res.send("Hello About")
// })
// app.post('/about',(req, res)=>{
//     res.send("Hello About Post")
// })
// app.put('/about',(req, res)=>{
//     res.send("Hello About Put")
// })
// app.delete('/about',(req, res)=>{
//     res.send("Hello About delete")
// })
 
app.use((req, res)=>{
    res.send("<h1>404! Not a valid url</h1>")
})

module.exports = app;