const express = require("express")
const morgan = require("morgan")
const bodyBarser = require("body-parser")
const cors = require('cors')

// Config .env to ./config/config.env
require('dotenv').config({
    path: './config.config.env'
})

const app = express()

// Config for development
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))
    // Morgan gives information about each request
    // Cors enables server to work with React at localhost/port 3000 without problems

}

// Load all routes
const authRouter = require('./routes/auth.route.js')

// Use Routes
app.use('/api/', authRouter);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })

})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});