if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log("Connected to MongoDB"))

app.use(express.json())

const usersRouter = require('./routes/users')
const groupsRouter = require('./routes/groups')
const noticeRouter = require('./routes/notices')

app.use('/users', usersRouter)
app.use('/groups', groupsRouter)
app.use('/notices', noticeRouter)

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));