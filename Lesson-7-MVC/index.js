const express = require('express');
const app = express();

const userRoutes = require('./routes/users.route')
const PORT = 31;

app.use(express.urlencoded({extended: true}));
app.use(userRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Resource not found"
    })
})

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`)
})