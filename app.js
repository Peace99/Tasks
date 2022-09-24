const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./database/connect')
require('dotenv').config()
const notFound = require('./middlewares/not-found')
const errorHandlers = require('./middlewares/error-handler')
//middleware
app.use(express.static('./public')) 
app.use(express.json())
//routes

//root path for the tasks url
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlers)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, 
            console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()