const app = require('./app')

const PORT = 81;



app.listen(PORT,()=>{
    console.log(`App is running at http://localhost:${PORT}`)
})