require('dotenv').config()


const express = require('express');
const mongoose = require('mongoose')
const setRoutes = require('./routes/sets.js')
const userRoutes = require('./routes/user.js')

// require cors
const cors = require('cors')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

// express app
const app = express()

// enable middleware
app.use(cors(corsOptions))

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/sets', setRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 4000')
        })

    })
    .catch((error) => {
        console.log(error)
    })

